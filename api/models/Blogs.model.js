import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  introductionPara: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  by: {
    type: String,
    required: true,
  },
});

export const Blog = mongoose.model("Blog", BlogSchema);
