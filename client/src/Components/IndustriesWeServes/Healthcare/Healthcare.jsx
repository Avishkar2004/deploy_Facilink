import React from 'react'
import healthcare from "../../../assets/IndustriesweServe/Healthcare/Healthcare.jpg"
import { FaArrowRight, FaCheck, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SpecializedSolutions from './SpecializedSolutions'

const Healthcare = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                    src={healthcare}
                    alt="Manufacturing Banner"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
                        Healthcare
                    </h1>
                    <p className="text-sm sm:text-lg md:text-2xl mt-2 uppercase">
                        Our Digitally Oriented IFM Solution For Healthcare Sector.

                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="
             py-6 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-white">
                        {[
                            { value: "300", label: "CLIENTS" },
                            { value: "8+", label: "Service Team" },
                            { value: "1.3", label: "Million Sq. Ft. SERVING" },
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
                <span className='uppercase'>hEALTHCARE</span>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Right Side - Facilink Advantage */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg shadow-md w-full max-w-lg">
                            <h2 className="text-lg font-bold mb-4 text-white">Our Commitment to Healthcare Excellence</h2>
                            <p className="font-normal mb-4 text-white">
                                We provide innovative, technology-driven facility management solutions designed to enhance healthcare operations.
                            </p>
                            {/* Advantages List */}
                            <ul className="space-y-2 text-white">
                                {[
                                    "Comprehensive facility management services for hospitals and healthcare centers",
                                    "Advanced digital tools for monitoring and process optimization",
                                    "Sanitization and hygiene solutions to maintain infection-free environments",
                                    "Efficient waste and biomedical waste management solutions",
                                    "Operational support to ensure seamless hospital functionality",
                                    "Cost-effective strategies to improve service efficiency and reduce overheads",
                                ].map((advantage, index) => (
                                    <li key={index} className="flex items-center text-sm sm:text-base">
                                        <FaCheck className="mr-2 text-white" /> {advantage}
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-gradient-to-r from-gray-300 to-gray-400 text-black font-normal text-center p-4 mt-4 rounded-lg shadow-md">
                                Our goal is to create a seamless, technology-backed healthcare environment that improves patient care and operational efficiency.
                            </div>
                        </div>
                    </div>

                    {/* Left Side - Our Services */}
                    <div className="order-2 lg:order-1">
                        <p className="mb-1">
                            We specialize in providing integrated facility management solutions tailored for the healthcare industry. Our expertise spans across hospital operations, hygiene management, and support services, ensuring a clean, safe, and efficient environment for patients and medical professionals.
                        </p>
                        <p className="mb-1">
                            Our infection prevention programs incorporate advanced sanitization techniques, mechanized cleaning, and strict compliance with healthcare regulations to maintain the highest hygiene standards.
                        </p>
                        <p className="mb-1">
                            We offer specialized waste management solutions, including biomedical and hazardous waste disposal, ensuring regulatory compliance and environmental responsibility.
                        </p>
                        <p className="mb-1">
                            Our technical support services ensure smooth hospital operations, including facility maintenance, energy management, and infrastructure upkeep, reducing downtime and increasing efficiency.
                        </p>
                        <p className="mb-1">
                            With our trained workforce and digital solutions, we optimize hospital workflows, allowing medical professionals to focus on patient care while we handle the operational complexities.
                        </p>
                        <p className="mb-1 font-semibold">
                            Our Key Areas of Expertise:
                        </p>
                        {/* Key Services */}
                        <ul className="space-y-2 mt-4">
                            {[
                                "Comprehensive hospital facility management",
                                "Infection control and hygiene solutions",
                                "Biomedical and general waste management",
                                "Technical support and maintenance",
                                "Energy efficiency and cost optimization",
                            ].map((service, index) => (
                                <li key={index} className="flex items-center text-sm sm:text-base">
                                    <FaCheck className="mr-2 text-black" /> {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            <SpecializedSolutions />
        </div>
    )
}

export default Healthcare