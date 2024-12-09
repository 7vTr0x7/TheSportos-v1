import mongoose from "mongoose";

const LeagueSchema = new mongoose.Schema({
  league: {
    type: String,
    required: true,
  },
  logo_url: {
    type: String,
    required: true,
  },

  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  views: {
    type: Number,
    required: true,
    min: 0,
  },
});

export const League = mongoose.model("League", LeagueSchema);
