import { connect } from "mongoose";
import env from "./env";

async function connectDb(): Promise<void> {
  try {
    connect(env.MONGO_URL);
    console.log("Connected to database successfully.");
  } catch (error: unknown) {
    console.log("Failed to connect database.");
    console.error(error);
  }
}

export default connectDb;
