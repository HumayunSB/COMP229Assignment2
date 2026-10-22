import 'dotenv/config';
import mongoose from 'mongoose';

export async function connectDatabase() {
  const { MONGODB_URI: mongoUri } = process.env;

  if (!mongoUri) {
    throw new Error(
      'MONGODB_URI is not set. Create a local .env file using .env.example.'
    );
  }

  try {
    await mongoose.connect(mongoUri);
    console.log(`MongoDB connected to database "${mongoose.connection.name}".`);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown MongoDB connection error.';
    const safeMessage = message
      .replaceAll(mongoUri, '[redacted MongoDB URI]')
      .replace(/(mongodb(?:\+srv)?:\/\/)[^@\s]+@/gi, '$1[redacted]@');

    throw new Error(safeMessage, { cause: error });
  }
}
