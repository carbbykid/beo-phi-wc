import mongoose from "mongoose";
const { Schema } = mongoose;

const EmailSchema = new Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true },
);

const Email = mongoose.models.Email || mongoose.model("Email", EmailSchema);

export default Email;
