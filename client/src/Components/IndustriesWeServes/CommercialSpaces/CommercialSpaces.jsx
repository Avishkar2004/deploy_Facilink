import React from 'react'
import commercialSpaces from "../../../assets/IndustriesweServe/CommercialSpaces/CommercialSpaces.jpg"
import { FaArrowRight, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SpecializedSolutions from './SpecializedSolutions'
const CommercialSpaces = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                    src={commercialSpaces}
                    alt="commercial Spaces"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        COMMERCIAL SPACES
                    </h1>
                    <p className="text-sm sm:text-lg md:text-2xl mt-2">
                        CREATING A SAFE, SECURE & EFFICIENT ENVIRONMENT
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-white">
                        {[{ value: "300", label: "CLIENTS" },
                        { value: "8+", label: "Service Team" },
                        { value: "28", label: "Million Sq. Ft. SERVING" },
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
                <span className='uppercase'>Industries We Serve</span>
                <FaArrowRight className="text-xs" />
                <span>COMMERCIAL SPACES</span>
            </div>

            {/* CommercialSpaces */}
            <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-20">
                <div className="flex flex-col gap-8 items-start">
                    {/* Text Content */}
                    <div className="w-full text-left">
                        <h2 className="text-gray-800 text-lg sm:text-xl font-bold mb-4">
                            COMMERCIAL SPACES - ENSURING SAFETY, EFFICIENCY & COMPLIANCE
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                            Our facility management solutions for commercial and co-working spaces are designed to create a safe,
                            efficient, and compliant environment. We help businesses streamline operations, optimize space
                            utilization, and ensure adherence to regulatory standards with innovative and sustainable solutions.
                        </p>
                        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                            By leveraging cutting-edge technology, we provide <strong>proactive maintenance, energy-efficient solutions,
                                and real-time monitoring</strong> to enhance productivity and operational efficiency. Our services focus on
                            improving workspace functionality while ensuring <strong>sustainability and cost-effectiveness</strong>.
                        </p>
                        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                            Our key offerings include:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-sm sm:text-base md:text-lg text-gray-700">
                            <li>Smart space management and optimization</li>
                            <li>Automated security and surveillance solutions</li>
                            <li>Energy-efficient HVAC and lighting systems</li>
                            <li>Hygiene and sanitation protocols for workplace safety</li>
                            <li>Compliance monitoring and regulatory adherence</li>
                        </ul>
                        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                            Our goal is to help businesses foster a work environment that enhances productivity, ensures
                            compliance, and improves employee well-being. With our strategic approach, commercial spaces
                            can achieve <strong>seamless operations, sustainability, and long-term efficiency</strong>.
                        </p>
                    </div>
                </div>
            </div>

            <SpecializedSolutions />

        </div>
    )
}

export default CommercialSpaces