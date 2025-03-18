import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CreateBlog = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null, // Change from URL to file
    categories: "",
    author: "",
    readTime: "",
    publishedDate: today, // Set default to today
    isFeatured: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.withCredentials = true;

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("categories", formData.categories);
    formDataToSend.append("author", formData.author);
    formDataToSend.append("readTime", formData.readTime);
    formDataToSend.append("publishedDate", formData.publishedDate);
    formDataToSend.append("isFeatured", formData.isFeatured);
    if (formData.image) {
      formDataToSend.append("image", formData.image); // Append file
    }

    try {
      const response = await axios.post(
        "https://deploy-facilink.vercel.app/api/blogs/add",
        formDataToSend,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("🎉 Blog created successfully!", { autoClose: 3000 });
        setTimeout(() => navigate("/blogs"), 3000); // Redirect after success
      } else {
        throw new Error("Failed to create blog");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred while creating the blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        📝 Create a New Blog
      </h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Upload Image</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Categories</label>
          <input
            type="text"
            name="categories"
            value={formData.categories}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
            required
            placeholder="Enter two categories, separated by a comma"
          />
        </div>


        {/* Author */}
        <div>
          <label className="block text-gray-700 font-semibold">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Read Time */}
        <div>
          <label className="block text-gray-700 font-semibold">Read Time</label>
          <input
            type="text"
            name="readTime"
            value={formData.readTime}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
            placeholder="e.g. 5 min read"
            required
          />
        </div>

        {/* Published Date */}
        <div>
          <label className="block text-gray-700 font-semibold">Published Date</label>
          <input
            type="date"
            name="publishedDate"
            value={formData.publishedDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-indigo-400 transition"
            required
          />
        </div>

        {/* Featured Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
            className="h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
          />
          <label className="ml-2 text-gray-700">Mark as Featured</label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
