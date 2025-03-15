import React from 'react'
import PharmaSolution from "../../../assets/OurSolution/PharmaSolutions/download.jpg"
import { FaArrowRight, FaCheck, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import IndustriesWeServe from '../../IndustriesweServe'

const PharmaSolutions = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                    src={PharmaSolution}
                    alt="Pharma Solutions"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
                        Pharma Support Services
                    </h1>
                </div>
            </div>
            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
                        {[
                            { value: "320", label: "CLIENTS" },
                            { value: "2+", label: "Service Team" },
                            { value: "1.2", label: "Million Sq. Ft. SERVING" },
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
                <span className='uppercase'>Pharma Solutions</span>
            </div>
            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Right Side - Pharma Support Advantages */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-blue-600 p-6 rounded-lg shadow-md w-full max-w-lg">
                            <h2 className="text-lg font-bold mb-4 text-white">Our Expertise Includes</h2>
                            <p className="font-normal mb-4 text-white">
                                We provide comprehensive pharma support solutions with the following advantages:
                            </p>
                            {/* Advantages List */}
                            <ul className="space-y-2 text-white">
                                {[
                                    "Regulatory compliance and documentation",
                                    "Quality assurance and control services",
                                    "Cold chain logistics and storage",
                                    "Pharmaceutical waste management",
                                    "Process optimization and automation",
                                    "Research and development support"
                                ].map((advantage, index) => (
                                    <li key={index} className="flex items-center font-normal sm:text-base">
                                        <FaCheck className="mr-2 text-white" /> {advantage}
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-blue-400 text-black font-normal text-center p-4 mt-4 rounded-lg shadow-md">
                                <Link to="/">
                                    Need specialized pharma support? Contact us today
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Left Side - Main Content */}
                    <div className="order-2 lg:order-1">
                        <p className="mb-1 text-2xl font-semibold text-blue-600">
                            Ensuring Excellence in Pharmaceutical Operations
                        </p>
                        <p className="mb-1">
                            Our Pharma Support Services are designed to ensure compliance, quality, and efficiency in pharmaceutical operations.
                        </p>
                        <p className="mb-1">
                            We assist in regulatory compliance, supply chain management, and quality assurance, reducing risks and ensuring optimal pharmaceutical processes.
                        </p>
                        <p className="mb-1">
                            With advanced technology and industry expertise, we enhance manufacturing, distribution, and research efficiency.
                        </p>
                        <p className="mb-1">
                            Our tailored solutions support pharmaceutical companies in maintaining high standards and meeting industry regulations seamlessly.
                        </p>
                    </div>
                </div>
            </div>

            <IndustriesWeServe />
        </div>
    )
}





export default PharmaSolutions