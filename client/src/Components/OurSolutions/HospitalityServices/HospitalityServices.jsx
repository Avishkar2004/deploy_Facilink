import React from 'react'
import HospitalityService from "../../../assets/OurSolution/HospitalityServices/hospitality-services.jpg"
import { FaArrowRight, FaCheck, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import IndustriesWeServe from '../../IndustriesweServe'

const HospitalityServices = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                    src={HospitalityService}
                    alt="Hospitality Services"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
                        Hospitality Services
                    </h1>
                </div>
            </div>
            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
                        {[
                            { value: "600", label: "CLIENTS" },
                            { value: "2+", label: "Service Team" },
                            { value: "2", label: "Million Sq. Ft. SERVING" },
                            { value: "2", label: "Cities Offices" }
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <p className="text-lg sm:text-2xl font-bold">{stat.value}</p>
                                <p className="text-xs sm:text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Breadcrumb Navigation */}
            <div className="bg-gray-100 p-4 flex items-center justify-center sm:justify-start text-gray-600 text-sm gap-2">
                <Link to="/" className="flex items-center"><FaHome className="mr-1" /></Link>
                <FaArrowRight className="text-xs" />
                <span className='uppercase'>Our Solutions</span>
                <FaArrowRight className="text-xs" />
                <span className='uppercase'>
                    Hospitality Services
                </span>
            </div>
            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Right Side - Hospitality Service Advantages */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-blue-600 p-6 rounded-lg shadow-md w-full max-w-lg">
                            <h2 className="text-lg font-bold mb-4 text-white">Our Expertise Includes</h2>
                            <p className="font-normal mb-4 text-white">
                                We enhance the guest experience with premium hospitality solutions, including:
                            </p>
                            {/* Advantages List */}
                            <ul className="space-y-2 text-white">
                                {[
                                    "Housekeeping and sanitation services",
                                    "Guest relations and concierge services",
                                    "Catering and food service management",
                                    "Front desk and administrative support",
                                    "Laundry and linen management",
                                    "Event and banquet management"
                                ].map((advantage, index) => (
                                    <li key={index} className="flex items-center font-normal sm:text-base">
                                        <FaCheck className="mr-2 text-black" /> {advantage}
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-[#ffd177] text-black font-normal text-center p-4 mt-4 rounded-lg shadow-md">
                                <Link to="/">
                                    Need a tailored hospitality service? Contact us now
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Left Side - Main Content */}
                    <div className="order-2 lg:order-1">
                        <p className="mb-1 text-2xl font-semibold">
                            Elevating Hospitality Standards for Superior Guest Experiences
                        </p>
                        <p className="mb-1">
                            Our hospitality services focus on delivering exceptional guest experiences through well-managed, efficient, and seamless operations.
                        </p>
                        <p className="mb-1">
                            We provide top-tier housekeeping, front desk management, catering, and concierge services, ensuring excellence in hospitality operations.
                        </p>
                        <p className="mb-1">
                            With a dedicated team and state-of-the-art technology, we streamline hospitality services to enhance guest comfort and satisfaction.
                        </p>
                        <p className="mb-1">
                            Our solutions are designed to meet the unique demands of hotels, hospitals, corporate spaces, and event venues.
                        </p>
                        <p className="mb-1">
                            Whether it's maintaining cleanliness, managing guest relations, or providing premium food services, we ensure an outstanding hospitality experience.
                        </p>
                    </div>
                </div>
            </div>


            <IndustriesWeServe />
        </div>
    )
}



export default HospitalityServices