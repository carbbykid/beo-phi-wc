import mongoose from "mongoose";
const { Schema } = mongoose;

const SettingSchema = new Schema(
  {
    id: { type: Number, required: true },
    firstStage: { type: Number, required: true },
  },
  { timestamps: true },
);

const Setting =
  mongoose.models.Setting || mongoose.model("Setting", SettingSchema);

export default Setting;
