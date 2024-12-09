import mongoose from "mongoose";

const FeaturedPlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  club: {
    type: String,
    required: true,
  },
  stats: {
    goals: {
      type: String,
      required: true,
    },
    assists: {
      type: String,
      required: true,
    },
    rank: {
      type: String,
      required: true,
    },
  },
  position: {
    type: String,
    required: true,
  },
});

export const FeaturedPlayer = mongoose.model(
  "FeaturedPlayer",
  FeaturedPlayerSchema
);
