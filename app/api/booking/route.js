// app/api/booking/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Booking from '@/lib/models/Booking';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      fullName, email, phone, packageType, preferredDate,
      preferredTime, additionalHours, additionalNotes,
    } = body;

    if (!fullName || !email || !phone || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const basePrice = 7000;
    const additionalHourPrice = 3000;
    const totalAmount = basePrice + (additionalHours || 0) * additionalHourPrice;

    const booking = await Booking.create({
      fullName, email, phone,
      packageType: packageType || 'Seamless Backdrop Package',
      preferredDate, preferredTime,
      additionalHours: additionalHours || 0,
      additionalNotes,
      basePrice, additionalHourPrice, totalAmount,
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
      subject: 'Studio Booking Request Received - Raster Media',
      html: `
        <h2>Booking Request Received</h2>
        <p>Dear ${fullName},</p>
        <p>We have received your studio booking request.</p>
        <br>
        <h3>Booking Details:</h3>
        <p><strong>Package:</strong> ${packageType || 'Seamless Backdrop Package'}</p>
        <p><strong>Date:</strong> ${new Date(preferredDate).toLocaleDateString()}</p>
        <p><strong>Time:</strong> ${preferredTime}</p>
        <p><strong>Base Package (2hr):</strong> LKR ${basePrice.toLocaleString()}</p>
        ${additionalHours ? `<p><strong>Additional Hours:</strong> ${additionalHours} (+LKR ${(additionalHours * additionalHourPrice).toLocaleString()})</p>` : ''}
        <p><strong>Total Amount:</strong> LKR ${totalAmount.toLocaleString()}</p>
        <br>
        <p><strong>Status:</strong> Pending Confirmation</p>
        <p>We will review your booking and send you a confirmation email shortly.</p>
        <br>
        <p>Best regards,</p>
        <p><strong>Raster Media Team</strong></p>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Studio Booking - ${new Date(preferredDate).toLocaleDateString()}`,
      html: `
        <h2>New Studio Booking Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${new Date(preferredDate).toLocaleDateString()}</p>
        <p><strong>Time:</strong> ${preferredTime}</p>
        <p><strong>Additional Hours:</strong> ${additionalHours || 0}</p>
        <p><strong>Total Amount:</strong> LKR ${totalAmount.toLocaleString()}</p>
        ${additionalNotes ? `<p><strong>Notes:</strong> ${additionalNotes}</p>` : ''}
        <br>
        <p><em>Please confirm or reject this booking in the admin panel.</em></p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Booking request submitted successfully',
      data: booking,
    });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to submit booking', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    const filter = status ? { status } : {};
    const bookings = await Booking.find(filter).sort({ preferredDate: 1 });

    return NextResponse.json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error('Fetch bookings error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings', details: error.message },
      { status: 500 }
    );
  }
}