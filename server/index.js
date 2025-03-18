import express from "express";
import cors from "cors";
import "dotenv/config";
import connectMongoDB from "./config/db.js"; // Import the MongoDB connection function
import blogRoutes from "./routes/blogRoutes.js";
import photoRoutes from "./routes/photoRoutes.js";

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://facilink-server.vercel.app",
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
app.get("/", (req, res) => {
  res.send("API is working fine on home page 🚀🚀🚀");
});

app.get("/api", (req, res) => {
  res.send("API is working on api");
});

// ✅ Connect to MongoDB before starting the server
connectMongoDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});

export default app;
