import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import blogRoutes from "./routes/blogRoutes.js";
import photoRoutes from "./routes/photoRoutes.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));

app.use("/api/blogs", blogRoutes);
app.use("/api/photos", photoRoutes);

// ✅ Test API Route
app.get("/api", (req, res) => {
  res.json({ message: "API is working!" });
});

// ✅ Connect to MongoDB before responding
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => console.error("Database connection failed:", err));

// ✅ Export app as a function for Vercel
export default app;
