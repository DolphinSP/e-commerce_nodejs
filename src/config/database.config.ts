import mongoose, { ConnectOptions } from "mongoose";

export async function connectMongoDB(): Promise<void> {
  try {
    const connectionString = process.env.CONNECTION_STRING!;
    const configuration: ConnectOptions = {
      authMechanism: "DEFAULT",
      authSource: "admin",
    };
    await mongoose.connect(connectionString, configuration);
    console.log("💾 Connected to MongoDB 📚📚📚📚📚📚📚📚📚📚");
  } catch (error) {
    console.log("Connection failed to MongoDB");
    console.log(error);
  }
}
