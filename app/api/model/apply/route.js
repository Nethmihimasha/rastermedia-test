import nodemailer from 'nodemailer';
import connectDB from '../../../../lib/mongodb';
import ModelSubmission from '../../../../lib/models/ModelSubmission';

export async function POST(req) {
  try {
    const data = await req.json();
    const {
      fullName,
      email,
      instagram,
      portfolioLink,
      otherLinks,
      age,
      phone,
    } = data;

    if (!email || !fullName) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Save submission to DB (best-effort)
    try {
      await connectDB();
      await ModelSubmission.create({
        fullName,
        email,
        phone,
        age,
        instagram,
        portfolioLink,
        otherLinks,
        raw: data,
      });
    } catch (dbErr) {
      console.error('DB save error (model):', dbErr);
    }

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

    const htmlBody = `
      <h2>New Model Registration</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Age:</strong> ${age || 'N/A'}</p>
      <p><strong>Instagram:</strong> ${instagram || 'N/A'}</p>
      <p><strong>Portfolio:</strong> ${portfolioLink || 'N/A'}</p>
      <p><strong>Other Links:</strong> ${otherLinks || 'N/A'}</p>
    `;

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      subject: `Model Registration: ${fullName}`,
      html: htmlBody,
    });

    const confirmationHtml = `
      <p>Hi ${fullName},</p>
      <p>Thanks for registering as a model with Raster Media. We received your submission and will review it.</p>
      <p>— Raster Media</p>
    `;

    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: `Raster Media — Model registration received`,
      html: confirmationHtml,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Model apply error', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}

export const runtime = 'nodejs';
