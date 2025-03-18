import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaClock, FaTag } from "react-icons/fa";
import axios from "axios";

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);


    useEffect(() => {
        axios.defaults.withCredentials = true;
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`https://facilink-server-btfxs7y7j-avishkarkakde2004-gmailcoms-projects.vercel.app/api/blogs/${id}`, {
                    withCredentials: true,
                });
                setBlog(response.data);
            } catch (error) {
                console.error("Error fetching blog details:", error);
            }
        };
        fetchBlog();
    }, [id]);

    if (!blog) {
        return <p className="text-center text-gray-600 text-lg font-semibold py-20">Loading blog...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            {/* Blog Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">{blog.title}</h1>

            {/* Meta Details */}
            <div className="flex flex-wrap justify-center items-center text-gray-600 mt-4 space-x-6 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                    <FaUser className="text-blue-500" />
                    <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FaClock className="text-green-500" />
                    <span>{blog.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="text-red-500" />
                    <span>{new Date(blog.publishedDate).toDateString()}</span>
                </div>
            </div>

            {/* Blog Image */}
            <div className="w-full mt-6 rounded-lg overflow-hidden shadow-lg">
                <img src={blog.image} alt={blog.title} />
            </div>

            {/* Blog Categories */}
            {blog.categories && blog.categories.length > 0 && (
                <div className="flex flex-wrap justify-center mt-6 space-x-3">
                    {blog.categories.map((category, index) => (
                        <span
                            key={index}
                            className="flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                            <FaTag className="text-gray-500" />
                            <span>{category}</span>
                        </span>
                    ))}
                </div>
            )}

            {/* Blog Content */}
            <p className="text-gray-700 text-sm leading-relaxed mt-8 text-justify">{blog.content}</p>

            {/* Back to Blogs Button */}
            <div className="text-center mt-10">
                <Link
                    to="/blogs"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    ← Back to Blogs
                </Link>
            </div>
        </div>
    );
};

export default BlogDetail;
