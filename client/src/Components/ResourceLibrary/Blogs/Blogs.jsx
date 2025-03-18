import React, { useEffect, useState } from "react";
import Blog from "../../../assets/Blogs/blogs.jpg";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const API_URL = "https://facilink-server-btfxs7y7j-avishkarkakde2004-gmailcoms-projects.vercel.app/api";

    useEffect(() => {
        const fetchBlogs = async () => {
            axios.defaults.withCredentials = true;
            try {
                const response = await axios.get(`${API_URL}/blogs`, { withCredentials: true, })

                setBlogs(response.data);
            } catch (error) {
                setError("Failed to fetch blogs. Please try again later.");
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img src={Blog} alt="Blog" className="w-full h-full object-cover brightness-50" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Blogs</h1>
                    <p className="text-sm sm:text-lg md:text-2xl mt-2">CREATING A SAFER & PRODUCTIVE ENVIRONMENT</p>
                </div>
            </div>

            {/* Breadcrumb Navigation */}
            <div className="bg-gray-100 p-4 flex items-center justify-center sm:justify-start text-gray-600 text-sm gap-2">
                <Link to="/" className="flex items-center">
                    <FaHome className="mr-1" />
                </Link>
                <FaArrowRight className="text-xs" />
                <span className="uppercase">Blogs</span>
            </div>

            {/* Blog Post Grid */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                {loading ? (
                    <p className="text-center text-gray-600">Loading blogs...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : blogs.length === 0 ? (
                    <p className="text-center text-gray-600">No blogs available.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {blogs.map((blog) => (
                            <div
                                key={blog._id}
                                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
                            >
                                {/* Blog Image */}
                                <div className="w-full h-48 overflow-hidden">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                                </div>

                                {/* Blog Content */}
                                <div className="p-5">
                                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{blog.title}</h2>
                                    <p className="text-gray-600 text-sm">{blog.content.slice(0, 100)}...</p>
                                </div>

                                {/* Read More Button */}
                                <div className="px-5 pb-5">
                                    <button
                                        onClick={() => navigate(`/blogs/${blog._id}`)}
                                        className="w-full py-2 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
