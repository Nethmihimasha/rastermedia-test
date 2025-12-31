// lib/models/Model.ts
import mongoose, { Schema, models } from 'mongoose';

const ModelSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
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
    height: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'non-binary', 'other', 'prefer-not-to-say'],
      required: true,
    },
    portfolioLink: {
      type: String,
    },
    // Social Media
    instagramHandle: {
      type: String,
      required: true,
    },
    linkedinProfile: {
      type: String,
    },
    twitterHandle: {
      type: String,
    },
    tiktokHandle: {
      type: String,
    },
    otherLinks: {
      type: String,
    },
    // Modeling Categories (array of selected categories)
    categories: {
      type: [String],
      required: true,
      enum: ['fashion', 'commercial', 'editorial', 'fitness', 'runway', 'print'],
    },
    // Portfolio Photos (uploaded by ADMIN, not by model during registration)
    photos: {
      type: [String], // Array of Cloudinary URLs
      default: [],
    },
    // Languages Spoken (array)
    languages: {
      type: [String],
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    isVisible: {
      type: Boolean,
      default: false, // Only visible on website after admin approval
    },
  },
  {
    timestamps: true,
  }
);

const Model = models.Model || mongoose.model('Model', ModelSchema);

export default Model;