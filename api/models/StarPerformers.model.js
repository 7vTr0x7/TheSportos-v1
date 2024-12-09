import mongoose from "mongoose";

const StarPerformersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  achievement: {
    type: String,
    required: true,
  },
  tournament: {
    type: String,
    required: true,
  },
  goals: {
    type: Number,
    required: true,
  },
  assists: {
    type: Number,
    required: true,
  },
  matches_played: {
    type: Number,
    required: true,
  },
});

export const StarPerformers = mongoose.model(
  "StarPerformers",
  StarPerformersSchema
);
