import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to MongoDB Database with ${conn.connection.host} at port number ${conn.connection.port}`
        .bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in Connecting Database ${error}`.bgRed.white);
  }
};

export default connectDB;
