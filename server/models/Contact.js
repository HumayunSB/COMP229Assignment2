import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true, maxlength: 40 },
    lastName: { type: String, required: true, trim: true, maxlength: 40 },
    phone: { type: String, required: true, trim: true, maxlength: 20 },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    message: { type: String, required: true, trim: true, minlength: 10, maxlength: 500 },
    preferredContactMethod: {
      type: String,
      enum: ['email', 'phone', 'either'],
      required: true
    },
    referralSource: {
      type: String,
      enum: ['google', 'linkedin', 'referral', 'other'],
      required: true
    },
    subscribeToUpdates: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model('Contact', contactSchema);
