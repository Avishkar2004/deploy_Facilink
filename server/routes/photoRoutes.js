import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import Photo from "../model/Photo.js";
import dotenv from "dotenv";
dotenv.config(); // Load environment variable;

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
});

// Set up multer storage with Cloudinary

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "photos", // Cloudinary folder to storage images
    format: async (req, file) => "png", // save the png
    public_id: (req, file) =>
      Date.now() + "-" + file.originalname.split(".")[0],
  },
});

const upload = multer({ storage });

router.post("/uploads", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!req.file || !req.file.path) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    // Cloudinary file URL
    const imageUrl = req.file.path;

    const newPhoto = new Photo({
      title,
      description,
      imageUrl,
    });

    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (error) {
    console.error("Error uploading photo:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const photos = await Photo.find().sort({ uploadedAt: -1 });
    res.json(photos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
