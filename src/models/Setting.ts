import mongoose from "mongoose";
const { Schema } = mongoose;

const SettingSchema = new Schema(
  {
    id: { type: Number, required: true },
    firstStagePercent: { type: Number, required: true },
    roundOf16Percent: { type: Number, required: true },
    quarterFinalPercent: { type: Number, required: true },
    semiFinalPercent: { type: Number, required: true },
    thirdPlacePercent: { type: Number, required: true },
    finalPercent: { type: Number, required: true },
  },
  { timestamps: true },
);

const Setting =
  mongoose.models.Setting || mongoose.model("Setting", SettingSchema);

export default Setting;
