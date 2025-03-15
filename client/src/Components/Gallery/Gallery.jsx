import axios from "axios";
import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([])
  axios.defaults.withCredentials = true


  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await fetch("https://deploy-facilink.vercel.app/api/photos")
        if (!response.ok) throw new Error("Failed to fetch photos")
        const data = await response.json()
        setImages(data)
      } catch (error) {
        console.error("Error fetching photos:", error)
      }
    }
    fetchPhoto()
  }, [])

  return (
    <div className="relative w-full">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
          Featured Gallery
        </h2>
        {images.length === 0 ? (
          <p className="text-center text-gray-500">No photos available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((photo, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={`http://localhost:8000${photo.imageUrl}`}
                  alt={photo.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
