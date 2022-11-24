import mongoose from "mongoose";
const { Schema } = mongoose;

const ResultMatchSchema = new Schema(
  {
    id: { type: String, required: true },
    timeMatch: { type: String, required: true },
    team1: {
      name: { type: String, required: true },
      flagUrl: { type: String, required: true },
      score: { type: Number, required: true },
      userSelected: { type: String, required: true },
      plusScore: { type: Number, required: true },
    },
    team2: {
      name: { type: String, required: true },
      flagUrl: { type: String, required: true },
      score: { type: Number, required: true },
      userSelected: { type: String, required: true },
      plusScore: { type: Number, required: true },
    },
    winner: { type: String, required: true },
    typeMatch: { type: String, required: true },
  },
  { timestamps: true },
);

const ResultMatch =
  mongoose.models.Result || mongoose.model("Result", ResultMatchSchema);

export default ResultMatch;
