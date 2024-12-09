import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    require: true,
  },
});

export const Banner = mongoose.model("Banner", BannerSchema);
