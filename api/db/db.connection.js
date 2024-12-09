import mongoose from "mongoose";
import { config } from "dotenv";

config();

const MONGO_URL = process.env.MONGODB;

export const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URL);
    if (connection) {
      console.log("Connected to mongoDB");
    }
  } catch (error) {
    console.log("failed to connect to mongodb", error);
  }
};
