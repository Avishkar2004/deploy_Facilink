import express from "express";
import Blog from "../model/Blog.js";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer-Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blog_images",
    format: async (req, file) => "jpg", // Convert all images to jpg
    public_id: (req, file) => Date.now() + "-" + file.originalname,
  },
});

const upload = multer({ storage });

// ✅ Create Blog with Image Upload to Cloudinary
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { title, content, categories, author, readTime, isFeatured } =
      req.body;
    const imageUrl = req.file ? req.file.path : null; // Get Cloudinary URL

    const newBlog = new Blog({
      title,
      content,
      image: imageUrl, // Save Cloudinary URL in DB
      categories: categories.split(","), // Convert string to array
      author,
      readTime,
      isFeatured: isFeatured === "true",
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ publishedDate: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get a single blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update a blog
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, content, categories, author, readTime, isFeatured } =
      req.body;

    let imageUrl;
    if (req.file) {
      imageUrl = req.file.path; // Get Cloudinary URL
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content, categories, author, readTime, isFeatured, ...(imageUrl && { image: imageUrl }) },
      { new: true }
    );

    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Delete a blog
router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    // Delete image from Cloudinary
    if (blog.image) {
      const publicId = blog.image.split("/").pop().split(".")[0]; // Extract public ID
      await cloudinary.uploader.destroy(publicId);
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
