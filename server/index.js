import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import blogRoutes from "./routes/blogRoutes.js";
import photoRoutes from "./routes/photoRoutes.js";
import "dotenv/config";

const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8000;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

// ✅ Middleware
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));

// ✅ Serve Static Files
app.use("/uploads", express.static("uploads"));
app.use("/photos", express.static("photos"));

// ✅ API Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/photos", photoRoutes);

// ✅ Test API
app.get("/api", (req, res) => {
  res.send("API is working");
});

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Database connection failed:", err));

export default app;
