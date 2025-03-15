import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import mongoose from "mongoose";
import blogRoutes from "./routes/blogRoutes.js";
import photoRotes from "./routes/photoRoutes.js";
const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["https://deploy-facilink-7sf1.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Serve static files from the "uploads" folder
app.use("/uploads", express.static("uploads"));
app.use("/blogs", blogRoutes);

app.use("/photos", express.static("photos"));
app.use("/photos", photoRotes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Connect to MongoDB first
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database is connected successfully");

    // Start the server only after a successful DB connection
    app.listen(PORT, () => {
      console.log(`Server is up on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1); // Exit the process if the DB connection fails
  });
