import React from 'react'
import SoftService from "../../../assets/OurSolution/SoftServices/Soft_Services.jpg"
import { FaArrowRight, FaCheck, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import IndustriesWeServe from '../../IndustriesweServe'

const SoftServices = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
                <img
                    src={SoftService}
                    alt="Soft Services"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
                        Soft Services
                    </h1>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
                        {[
                            { value: "420", label: "CLIENTS" },
                            { value: "2+", label: "Service Team" },
                            { value: "4.2", label: "Million Sq. Ft. SERVING" },
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
                <span className='uppercase'>Soft Services
                </span>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Right Side - Soft Services Advantage */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-blue-600 p-6 rounded-lg shadow-md w-full max-w-lg">
                            <h2 className="text-lg font-bold mb-4 text-white">Our Expertise Includes</h2>
                            <p className="font-normal mb-4 text-white">
                                We enhance our soft services with the following key advantages for our clients:
                            </p>
                            {/* Advantages List */}
                            <ul className="space-y-2 text-white">
                                {[
                                    "Housekeeping and janitorial services",
                                    "Pest control and sanitization",
                                    "Waste management solutions",
                                    "Security and surveillance support",
                                    "Reception and front desk management",
                                    "Laundry and linen management"
                                ].map((advantage, index) => (
                                    <li key={index} className="flex items-center font-normal sm:text-base">
                                        <FaCheck className="mr-2 text-white" /> {advantage}
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-blue-400 text-black font-normal text-center p-4 mt-4 rounded-lg shadow-md">
                                Need a specific service? Please get in touch
                            </div>
                        </div>
                    </div>

                    {/* Left Side - Main Content */}
                    <div className="order-2 lg:order-1">
                        <p className="mb-1 text-2xl font-semibold">
                            Elevating Facility Standards with Comprehensive Soft Services
                        </p>
                        <p className="mb-1">
                            Our specialized soft services ensure a well-maintained, clean, and safe environment for all stakeholders. We offer tailored solutions to enhance hygiene, security, and operational efficiency across various industries.
                        </p>
                        <p className="mb-1">
                            Our services extend beyond cleanliness, focusing on overall well-being and comfort. Whether it's maintaining pristine workspaces, ensuring pest-free zones, or streamlining waste disposal, we provide end-to-end facility management solutions.
                        </p>
                        <p className="mb-1">
                            With our expert teams and advanced technology, we create sustainable and efficient work environments, helping organizations focus on their core operations while we take care of their facility needs.
                        </p>
                        <p className="mb-1">
                            We are committed to delivering exceptional soft services that contribute to healthier, more productive spaces.
                        </p>
                    </div>
                </div>
            </div>


            <IndustriesWeServe />
        </div>
    )
}

export default SoftServices