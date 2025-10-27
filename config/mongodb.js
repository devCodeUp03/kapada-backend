import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/kapada`);
    console.log("DB Connected!");
  } catch (err) {
    console.error("DB Connection Failed!", err);
    process.exit(1);
  }
};

export default connectDB;
