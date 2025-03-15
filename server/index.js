import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import mongoose from "mongoose";
import blogRoutes from "./routes/blogRoutes.js";
import photoRoutes from "./routes/photoRoutes.js";

const app = express();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Enable CORS for all requests
app.use(
  cors({
    origin: "https://deploy-facilink-7sf1.vercel.app",
    credentials: true,
  })
);

// ✅ Prefix API Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/photos", photoRoutes);

// ✅ Serve Static Files
app.use("/uploads", express.static("uploads"));
app.use("/photos", express.static("photos"));

// ✅ Test API Route
app.get("/api", (req, res) => {
  res.send("API is working");
});

// ✅ Connect to MongoDB First
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });
