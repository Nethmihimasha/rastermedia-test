// lib/models/Booking.ts
import mongoose, { Schema, models } from 'mongoose';

const BookingSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    packageType: {
      type: String,
      required: true,
      default: 'Seamless Backdrop Package',
    },
    preferredDate: {
      type: Date,
      required: true,
    },
    preferredTime: {
      type: String,
      required: true,
    },
    additionalHours: {
      type: Number,
      default: 0,
    },
    additionalNotes: {
      type: String,
    },
    basePrice: {
      type: Number,
      required: true,
      default: 7000, // LKR 7,000
    },
    additionalHourPrice: {
      type: Number,
      default: 3000, // LKR 3,000 per hour
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'rejected', 'completed', 'cancelled'],
      default: 'pending',
    },
    adminNotes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = models.Booking || mongoose.model('Booking', BookingSchema);

export default Booking;