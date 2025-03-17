import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import blogRoutes from "./routes/blogRoutes.js";
import photoRoutes from "./routes/photoRoutes.js";

const app = express();
const PORT = process.env.PORT || 8000;

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
