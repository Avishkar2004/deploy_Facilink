import React, { useRef, useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import ManufacturingBanner from "../../assets/BranchLocator/manufacturing-banner.jpg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const BranchLocator = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email via EmailJS
        emailjs.sendForm("service_fyz4q6u", "template_hcpbixv", form.current, "yY8zQZu3z-_tvMwU5")
            .then((res) => {
                toast.success("🎉 Your request has been submitted successfully!", {
                    position: "top-center",
                    autoClose: 2000
                });

                form.current.reset(); // Reset form fields
                setFormData({ name: "", email: "", subject: "", message: "" }); // Reset state
            })
            .catch((err) => {
                toast.error("❌ Failed to send email! Try again later.");
                console.error("Email sending error:", err);
            });
    };

    return (
        <div className="relative w-full">
            <ToastContainer />

            {/* Banner Section */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img src={ManufacturingBanner} alt="Manufacturing Banner"
                    className="w-full h-full object-cover brightness-50" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Branch Locator</h1>
                    <p className="text-sm sm:text-lg md:text-2xl mt-2">Pan India Offices</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-10 mt-10">
                    <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
                </div>

                {/* Two-column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div className="relative">
                                <FaUser className="absolute left-4 top-4 text-gray-400" />
                                <input type="text" name="name" value={formData.name} onChange={handleChange}
                                    className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter your name" required />
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
                                <input type="email" name="email" value={formData.email} onChange={handleChange}
                                    className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter email address" required />
                            </div>

                            {/* Subject Input */}
                            <div className="relative">
                                <FaCommentDots className="absolute left-4 top-4 text-gray-400" />
                                <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                                    className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter subject" required />
                            </div>

                            {/* Message Input */}
                            <div className="relative">
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter message" required></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="text-left">
                                <button type="submit"
                                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300">
                                    SEND MESSAGE
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Google Map Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Location</h2>
                        <div className="w-full h-[350px] rounded-lg overflow-hidden shadow-lg">
                            <iframe className="w-full h-full border-0"
                                src="https://www.google.com/maps/embed/v1/place?q=Yogeshwar+Arcade,+Near+PGI+Hotel,+New+Nana+Peth,+Pune-411002,+Maharashtra,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                allowFullScreen="" aria-hidden="false" tabIndex="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchLocator;
