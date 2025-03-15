import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadPhoto = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleUpload = async () => {
        if (!file || !title) {
            setMessage("Please select a file and enter a title.");
            return;
        }

        const formData = new FormData();
        formData.append("image", file);
        formData.append("title", title);

        try {
            const response = await fetch("http://localhost:8000/photos/uploads", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error("Upload failed");
            await response.json();
            toast.success("Photo uploaded successfully!");
            setTimeout(() => window.location.reload(), 2000);
        } catch (error) {
            toast.error("Error uploading photo.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 border rounded-2xl shadow-xl bg-white">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Upload a Photo</h2>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    onChange={handleTitleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                    onClick={handleUpload}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                    Upload Photo
                </button>
            </div>
            {message && <p className="text-center mt-4 text-red-500 font-medium">{message}</p>}
            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
};

export default UploadPhoto;
