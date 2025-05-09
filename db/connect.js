import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Successfully connected to db.");
  } catch (err) {
    console.error(err.message);
    console.log("Failed to connect to db");
    process.exit(1);
  }
};

export default connectDB;
