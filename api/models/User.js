import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contacts: [
      {
        city: { type: String },
        address: { type: String },
        telephone: { type: String },
        fullname: { type: String },
        comments: { type: String },
        status: {type: String, default: 'false'},
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);