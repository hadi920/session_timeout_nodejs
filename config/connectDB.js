import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
