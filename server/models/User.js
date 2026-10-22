import mongoose from 'mongoose';
import crypto from 'node:crypto';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    hashed_password: {
      type: String,
      required: true,
      minlength: 6,
      validate: {
        validator() {
          return (
            this._password === undefined ||
            (typeof this._password === 'string' && this._password.length >= 6)
          );
        },
        message: 'Password must be at least 6 characters long.'
      },
      select: false
    },
    salt: { type: String, select: false }
  },
  {
    toJSON: {
      transform(_document, result) {
        delete result.hashed_password;
        delete result.salt;
        return result;
      }
    }
  }
);

userSchema
  .virtual('password')
  .get(function getPassword() {
    return this._password;
  })
  .set(function setPassword(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  });

userSchema.methods = {
  ...userSchema.methods,
  authenticate(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword(password) {
    if (!password || !this.salt) {
      return '';
    }

    return crypto
      .createHmac('sha1', this.salt)
      .update(password)
      .digest('hex');
  },
  makeSalt() {
    return `${Date.now()}${Math.round(Math.random() * 1_000_000_000)}`;
  }
};

export default mongoose.model('User', userSchema);
