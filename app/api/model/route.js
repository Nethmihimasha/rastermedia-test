// app/api/model/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Model from '@/lib/models/Model';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      fullName, age, email, phone, height, country, gender,
      portfolioLink, instagramHandle, linkedinProfile, twitterHandle,
      tiktokHandle, otherLinks, categories, languages,
    } = body;

    if (!fullName || !age || !email || !phone || !height || !country || !gender || !instagramHandle || !categories || !languages) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const photos = body.photos || [];

    const model = await Model.create({
      fullName, age, email, phone, height, country, gender,
      portfolioLink, instagramHandle, linkedinProfile, twitterHandle,
      tiktokHandle, otherLinks, categories, languages,
      photos,
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Model Registration Received - Raster Media',
      html: `
        <h2>Thank you for registering!</h2>
        <p>Dear ${fullName},</p>
        <p>We have received your model registration application.</p>
        <p>Our team will review your profile and contact you soon.</p>
        <br>
        <p>Best regards,</p>
        <p><strong>Raster Media Team</strong></p>
      `,
    });

    // Admin notification includes photo thumbnails/links if provided
    const photosHtml = photos && photos.length > 0
      ? `<h4>Photos</h4>` + photos.map(url => `<div style="margin-bottom:8px;"><a href="${url}">${url}</a><br/><img src="${url}" style="max-width:240px;display:block;margin-top:6px;border-radius:6px;"/></div>`).join('')
      : '';

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Model Registration - ${fullName}`,
      html: `
        <h2>New Model Registration</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Height:</strong> ${height}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Instagram:</strong> ${instagramHandle}</p>
        <p><strong>Categories:</strong> ${categories.join(', ')}</p>
        <p><strong>Languages:</strong> ${languages.join(', ')}</p>
        ${portfolioLink ? `<p><strong>Portfolio:</strong> <a href="${portfolioLink}">${portfolioLink}</a></p>` : ''}
        ${photosHtml}
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Registration submitted successfully',
      data: model,
    });
  } catch (error) {
    console.error('Model registration error:', error);
    return NextResponse.json(
      { error: 'Failed to submit registration', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const visible = searchParams.get('visible');

    const filter = {};
    if (status) filter.status = status;
    if (visible === 'true') filter.isVisible = true;

    const models = await Model.find(filter).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: models,
    });
  } catch (error) {
    console.error('Fetch models error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch models', details: error.message },
      { status: 500 }
    );
  }
}