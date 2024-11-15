import mongoose from "mongoose";
import { Schema } from "mongoose";

const teamAnswerSchema = new Schema({
  TeamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },

  correctCount: {
    type: Number,
    default: 0,
  },
  time: {
    type: Date,
      // Default to current time when a document is created
  }
});

export default mongoose.model("TeamAnswer", teamAnswerSchema);