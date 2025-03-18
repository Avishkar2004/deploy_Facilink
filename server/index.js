import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import blogRoutes from "./routes/blogRoutes.js";
import photoRoutes from "./routes/photoRoutes.js";
import "dotenv/config";

const app = express();

const MONGO_URL =
  "mongodb+srv://avishkarkakde2004:Tq1wrgFhaH4vlhhb@facilinkserver.migjb.mongodb.net/?retryWrites=true&w=majority&appName=FacilinkServer";
const PORT = process.env.PORT || 8000;

// ✅ Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://deploy-facilink.vercel.app",
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
app.use("/api/blogs", blogRoutes);
app.use("/api/photos", photoRoutes);

// ✅ Test API
app.get("/api", (req, res) => {
  res.send("API is working");
});

// ✅ Connect to MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Database connection failed:", err));

export default app;
