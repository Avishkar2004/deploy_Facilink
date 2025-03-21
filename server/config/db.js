import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error("❌ MONGO_URL is not defined in environment variables");
}

// ✅ Use MongoClient to check the connection
const client = new MongoClient(MONGO_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectMongoDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });

    // ✅ Connect using Mongoose (Remove deprecated options)
    await mongoose.connect(MONGO_URL);
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); // Stop the app if DB connection fails
  }
}

export default connectMongoDB;
