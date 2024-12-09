import mongoose from "mongoose";

const TrophiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
  },
});

export const Trophies = mongoose.model("Trophies", TrophiesSchema);
