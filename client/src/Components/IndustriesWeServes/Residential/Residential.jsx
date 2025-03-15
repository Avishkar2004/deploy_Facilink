import React from 'react'
import Residental from "../../../assets/IndustriesweServe/Residental/Residental.jpg"
import { FaArrowRight, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SpecializedSolutions from './SpecializedSolutions'
const Residential = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                    src={Residental}
                    alt="commercial Spaces"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        RESIDENTIAL
                    </h1>
                    <p className="text-sm sm:text-lg md:text-2xl mt-2">
                        CREATING SAFER, CLEANER AND SMARTER LIVING SPACES
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-white">
                        {[{ value: "550", label: "CLIENTS" },
                        { value: "4+", label: "Service Team" },
                        { value: "2.8", label: "Million Sq. Ft. SERVING" },
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
            <div className="bg-gray-100 p-4 flex items-center justify-center sm:justify-start text-gray-600 text-sm gap-2 uppercase">
                <Link to="/" className="flex items-center"><FaHome className="mr-1" /></Link>
                <FaArrowRight className="text-xs" />
                <span className='uppercase'>Industries We Serve</span>
                <FaArrowRight className="text-xs" />
                <span>Residential Spaces</span>
            </div>

            {/* Pharmaceutical Service Section */}
            <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-20">
                <div className="flex flex-col gap-8 items-start">
                    {/* Text Content */}
                    <div className="w-full text-left">
                        <h2 className="text-gray-800 text-lg sm:text-xl font-bold mb-4">
                            RESIDENTIAL SOLUTIONS - SAFE, CLEAN & SMART LIVING SPACES
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                            Our residential facility management services are designed to create a safe,
                            clean, and smart living environment. We specialize in providing
                            <strong>comprehensive housekeeping and facility management solutions</strong> for residential
                            communities, ensuring seamless operations and an enhanced quality of life.
                        </p>
                        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                            Through our <strong>Integrated Facilities Management (IFM) approach</strong>, we optimize resources,
                            streamline operations, and implement real-time monitoring to improve efficiency
                            and cost-effectiveness. Our team ensures that all services adhere to <strong>strict statutory
                                and compliance protocols</strong> while incorporating advanced cleaning technologies and
                            risk management strategies.
                        </p>
                        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                            Our key offerings include:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-sm sm:text-base md:text-lg text-gray-700">
                            <li>Comprehensive housekeeping and sanitation services</li>
                            <li>24/7 security and surveillance monitoring</li>
                            <li>Smart waste management and recycling solutions</li>
                            <li>Energy-efficient maintenance of utilities</li>
                            <li>Landscaping and community space upkeep</li>
                        </ul>
                        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                            With extensive experience in managing residential premises, we ensure a
                            <strong>hygienic, secure, and well-maintained</strong> environment for all residents. Our goal is to
                            enhance community living through sustainable and innovative facility management solutions.
                        </p>
                    </div>
                </div>
            </div>



            <SpecializedSolutions />

        </div>
    )
}


export default Residential