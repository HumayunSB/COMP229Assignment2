import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    outcome: { type: String, required: true, trim: true },
    description: { type: [String], required: true },
    techStack: { type: [String], required: true },
    timeline: { type: String, required: true, trim: true },
    liveUrl: { type: String, trim: true },
    repoUrl: { type: String, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
