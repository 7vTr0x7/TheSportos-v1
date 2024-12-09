import mongoose from "mongoose";

const SponsorSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    require: true,
  },
  linkUrl: {
    type: String,
    require: true,
  },
});

export const Sponsor = mongoose.model("Sponsor", SponsorSchema);
