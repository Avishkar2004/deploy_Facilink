import React from 'react';
import {
    FaShieldAlt, FaBroom, FaConciergeBell, FaCouch, FaBuilding, FaBug, FaTree,
    FaWrench, FaLightbulb, FaHardHat, FaTh, FaTrash, FaFireExtinguisher,
    FaCamera, FaPaintRoller, FaPumpSoap, FaUserFriends, FaTruckLoading, FaUsers
} from 'react-icons/fa';
import { MdCleaningServices, MdOutlineCleaningServices } from "react-icons/md";

const services = [
    { name: "Security Force", icon: <FaShieldAlt /> },
    { name: "Housekeeping", icon: <FaBroom /> },
    { name: "Hospitality", icon: <FaConciergeBell /> },
    { name: "Upholstery Cleaning", icon: <FaCouch /> },
    { name: "Carpet Cleaning", icon: <MdCleaningServices /> },
    { name: "Facility Management", icon: <FaBuilding /> },
    { name: "Pest Control", icon: <FaBug /> },
    { name: "Landscaping", icon: <FaTree /> },
    { name: "Façade Cleaning", icon: <MdOutlineCleaningServices /> },
    { name: "Plumbing", icon: <FaWrench /> },
    { name: "Electrical Services", icon: <FaLightbulb /> },
    { name: "Construction", icon: <FaHardHat /> },
    { name: "Space Management", icon: <FaTh /> },
    { name: "Waste Management", icon: <FaTrash /> },
    { name: "Fire Safety", icon: <FaFireExtinguisher /> },
    { name: "CCTV Services", icon: <FaCamera /> },
    { name: "Painting", icon: <FaPaintRoller /> },
    { name: "Sanitization", icon: <FaPumpSoap /> },
    { name: "Guest Services", icon: <FaUserFriends /> },
    { name: "Facility Supplier", icon: <FaTruckLoading /> },
    { name: "Manpower Supplier", icon: <FaUsers /> }
];

const OurServices = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 w-full overflow-x-hidden py-12">
            <div className="container mx-auto text-center px-6 md:px-12">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center items-center">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white bg-opacity-10 border border-white/20 backdrop-blur-md shadow-lg p-6 rounded-xl flex flex-col items-center transition transform hover:scale-105 hover:bg-opacity-20"
                        >
                            <div className="text-4xl md:text-5xl text-white mb-3">{service.icon}</div>
                            <p className="text-sm md:text-base font-semibold text-gray-200 text-center">{service.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;
