import mongoose from "mongoose";

const StandingsSchema = new mongoose.Schema({
  club: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  league: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  played: {
    type: String,
    required: true,
  },
  won: {
    type: Number,
    required: true,
  },
  drawn: {
    type: Number,
    required: true,
  },
  lost: {
    type: Number,
    required: true,
  },
  goals: {
    type: String,
    required: true,
  },
  last5: {
    type: [String],
    required: true,
  },

  points: {
    type: Number,
    required: true,
  },
});

export const Standings = mongoose.model("Standings", StandingsSchema);
