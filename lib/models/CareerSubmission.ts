import mongoose, { Schema, models } from 'mongoose';

const CareerSubmissionSchema = new Schema(
  {
    fullName: String,
    email: String,
    phone: String,
    jobTitle: String,
    location: String,
    employmentType: String,
    salaryRange: String,
    cover: String,
    resumeFilename: String,
    raw: Schema.Types.Mixed,
  },
  { timestamps: true }
);

const CareerSubmission = models.CareerSubmission || mongoose.model('CareerSubmission', CareerSubmissionSchema);

export default CareerSubmission;
