import nodemailer from 'nodemailer';
import connectDB from '../../../../lib/mongodb';
import CareerSubmission from '../../../../lib/models/CareerSubmission';

export async function POST(req) {
  try {
    const data = await req.json();
    const {
      fullName,
      email,
      phone,
      cover,
      jobTitle,
      location,
      employmentType,
      salaryRange,
    } = data;

    // Basic validation
    if (!email || !fullName) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Save submission to DB (best-effort)
    try {
      await connectDB();
      await CareerSubmission.create({
        fullName,
        email,
        phone,
        jobTitle,
        location,
        employmentType,
        salaryRange,
        cover,
        raw: data,
      });
    } catch (dbErr) {
      console.error('DB save error (career):', dbErr);
      // continue even if DB save fails
    }

    // Configure transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toAddress = process.env.RASTER_MEDIA_EMAIL || process.env.TO_EMAIL;
    const fromAddress = process.env.FROM_EMAIL || process.env.SMTP_USER;

    // Email to raster media with full details
    const htmlBody = `
      <h2>New Career Application</h2>
      <p><strong>Position:</strong> ${jobTitle || 'N/A'}</p>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Location:</strong> ${location || 'N/A'}</p>
      <p><strong>Employment Type:</strong> ${employmentType || 'N/A'}</p>
      <p><strong>Salary Range:</strong> ${salaryRange || 'N/A'}</p>
      <h4>Cover Letter</h4>
      <p>${cover ? cover.replace(/\n/g, '<br/>') : 'N/A'}</p>
    `;

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      subject: `Career Application: ${jobTitle || 'Open Position'} — ${fullName}`,
      html: htmlBody,
    });

    // Confirmation email to applicant
    const confirmationHtml = `
      <p>Hi ${fullName},</p>
      <p>Thanks for applying for <strong>${jobTitle || 'a position'}</strong> at Raster Media. We received your application and will review it shortly.</p>
      <p>— Raster Media</p>
    `;

    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: `Thanks for applying to Raster Media`,
      html: confirmationHtml,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Career apply error', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}

export const runtime = 'nodejs';
