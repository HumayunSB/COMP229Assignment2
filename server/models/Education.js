import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    degree: { type: String, required: true, trim: true },
    institution: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    startYear: { type: Number, required: true, min: 1900 },
    endYear: {
      type: Number,
      required: true,
      min: 1900,
      validate: {
        validator(value) {
          return value >= this.startYear;
        },
        message: 'endYear must be greater than or equal to startYear.'
      }
    },
    detail: { type: String, default: '', trim: true },
    note: { type: String, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model('Education', educationSchema);
