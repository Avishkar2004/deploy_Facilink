import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import blogRoutes from "./routes/blogRoutes.js";
import photoRoutes from "./routes/photoRoutes.js";

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://facilink-server-5ns00ksvs-avishkarkakde2004-gmailcoms-projects.vercel.app",
      "https://deploy-facilink-7sf1.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Serve Static Files
app.use("/uploads", express.static("uploads"));
app.use("/photos", express.static("photos"));

// ✅ API Routes
app.use("/", blogRoutes);
app.use("/api/photos", photoRoutes);

app.get("/", (req, res) => {
  res.send("API is working fine 🚀🚀🚀");
});
// ✅ Test API
app.get("/api", (req, res) => {
  res.send("API is working");
});

// ✅ Connect to MongoDB
const MONGO_URL = process.env.MONGO_URL;
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection failed:", err));

// ✅ Export app for Vercel
export default app;
