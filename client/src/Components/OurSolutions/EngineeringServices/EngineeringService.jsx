import React from 'react'

import EngineeringServiceLogo from "../../../assets/OurSolution/EngineeringService/Engineering_Services.jpg"
import { FaArrowRight, FaCheck, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import IndustriesWeServe from '../../IndustriesweServe'

const EngineeringService = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                    src={EngineeringServiceLogo}
                    alt="Engineering Service Logo"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
                        Engineering Services
                    </h1>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
                        {[
                            { value: "480", label: "CLIENTS" },
                            { value: "5+", label: "Service Team" },
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
                <span className='uppercase'>Engineering Services
                </span>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Right Side - Facilink Advantage (Moved to Top) */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-blue-600 p-6 rounded-lg shadow-md w-full max-w-lg">
                            <h2 className="text-lg font-bold mb-4 text-white">Our Expertise Includes</h2>
                            <p className="font-normal mb-4 text-white">
                                We enhance our solutions with the following key advantages for our clients:
                            </p>
                            {/* Advantages List */}
                            <ul className="space-y-2 text-white">
                                {[
                                    "Utility operations and maintenance",
                                    "Plant operations and maintenance",
                                    "Increase in patient satisfaction",
                                    "Optimization of operations and reduction in maintenance cost",
                                    "Extended longevity and improved aesthetics of facilities",
                                    "Prevention of hospital-acquired infections"
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
                            A successful enterprise requires regular upkeep of engineering and facility maintenance.
                        </p>
                        <p className="mb-1">
                            Facilink is committed to providing a safe and healthy environment for over 90 healthcare clients, covering 2,000 beds and supported by 2 branches across India. Our solutions reduce hospital-acquired infections and enhance patient care services through digital integration, advanced machinery, and skilled manpower.
                        </p>
                        <p className="mb-1">
                            Our services not only improve patient care but also ensure a clean and protected environment for healthcare professionals, including doctors, patient care attendants, and general duty attendants.
                        </p>
                        <p className="mb-1">
                            We prioritize a safe and hygienic environment to elevate the patient experience.
                        </p>
                        <p className="mb-1">
                            Our expertise extends to project and program management, delivering state-of-the-art solutions to our healthcare partners in record time. We take complete responsibility for ensuring world-class service and operational excellence.
                        </p>
                        <p className="mb-1">
                            Our goal is to consistently enhance facility efficiency while reducing operational costs.
                        </p>
                        <p className="mb-1 font-semibold">
                            Our solutions positively impact the following areas:
                        </p>
                    </div>
                </div>
            </div>


            <IndustriesWeServe />
        </div>
    )
}

export default EngineeringService