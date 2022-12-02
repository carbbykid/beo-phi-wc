import mongoose from "mongoose";
const { Schema } = mongoose;

const ResultMatchSchema = new Schema(
  {
    id: { type: Number, required: true },
    timeMatch: { type: String, required: true },
    awayTeam: {
      name: { type: String, required: true },
      // flagUrl: { type: String, required: true },
      goals: { type: Number, required: true },
      penalties: { type: Number, require: true },
      userSelected: { type: String, required: true },
      plusScore: { type: Number, required: true },
    },
    homeTeam: {
      name: { type: String, required: true },
      // flagUrl: { type: String, required: true },
      goals: { type: Number, required: true },
      penalties: { type: Number, require: true },
      userSelected: { type: String, required: true },
      plusScore: { type: Number, required: true },
    },
    winner: { type: String, required: true },
    typeMatch: { type: String, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true },
);

const ResultMatch =
  mongoose.models.Result || mongoose.model("Result", ResultMatchSchema);

export default ResultMatch;
