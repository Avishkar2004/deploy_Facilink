import React from 'react';
import { Link } from 'react-router-dom';
import ManufacturingBanner from "../../../assets/IndustriesweServe/Manufacturing/manufacturing-banner.jpg";
import { FaHome, FaArrowRight, FaCheck } from 'react-icons/fa';
import SpecializedSolutions from './SpecializedSolutions';

const Manufacturing = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                    src={ManufacturingBanner}
                    alt="Manufacturing Banner"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        MANUFACTURING
                    </h1>
                    <p className="text-sm sm:text-lg md:text-2xl mt-2">
                        CREATING A SAFER & PRODUCTIVE ENVIRONMENT
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 py-6 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-white">
                        {[
                            { value: "300+", label: "CLIENTS" },
                            { value: "8+", label: "Service Team" },
                            { value: "66.5", label: "Million Sq. Ft. SERVING" },
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
                <span className='uppercase'>Manufacturing</span>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side */}
                    <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-4">
                            Enhancing Productivity & Safety in Your Manufacturing Facility
                        </h2>
                        <p className="mb-6">
                            We support over 2 manufacturing units with a dedicated team of 30+ professionals across 2 industry segments.
                            Manufacturing facilities often face critical challenges such as:
                        </p>

                        {/* Challenges List */}
                        <ul className="space-y-2">
                            {[
                                "Workplace Safety & Compliance",
                                "Maintaining Hygiene & Cleanliness",
                                "Ensuring Business Continuity & Operational Efficiency",
                                "Optimizing Costs Without Compromising Quality",
                                "Environmental & Regulatory Compliance"
                            ].map((issue, index) => (
                                <li key={index} className="flex items-center text-sm sm:text-base">
                                    <FaCheck className="mr-2 text-blue-600" /> {issue}
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-lg font-bold mt-6">How We Support Your Operations:</h3>

                        {/* Support Services */}
                        <ul className="space-y-2 mt-4">
                            {[
                                "Comprehensive Production Support with Skilled Manpower",
                                "End-to-End Utility Operations & Maintenance",
                                "Payroll Management & Workforce Solutions",
                                "Engineering & Energy Efficiency Audits",
                                "Sustainable Waste Management & Pest Control",
                                "Advanced Mechanized Cleaning & Sanitation",
                                "Landscaping & Horticulture Maintenance"
                            ].map((service, index) => (
                                <li key={index} className="flex items-center text-sm sm:text-base">
                                    <FaCheck className="mr-2 text-blue-600" /> {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg shadow-md w-full max-w-lg">
                            <h2 className="text-lg font-bold mb-4 text-white">Why Choose Facilink?</h2>
                            <p className="text-white mb-4">
                                Our integrated solutions ensure seamless facility management with:
                            </p>

                            {/* Advantages List */}
                            <ul className="space-y-2 text-white">
                                {[
                                    "AI-driven digital apps for real-time monitoring, reporting & maintenance",
                                    "A one-stop solution for all Integrated Facility Management (IFM) needs",
                                    "Customized outcome-driven production support services",
                                    "Prolonged asset lifecycle through preventive maintenance",
                                    "People-centric approach to boost efficiency & productivity"
                                ].map((advantage, index) => (
                                    <li key={index} className="flex items-center text-sm sm:text-base">
                                        <FaCheck className="mr-2" /> {advantage}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* Specialized Solutions Section */}
            <SpecializedSolutions />
        </div>
    );
}

export default Manufacturing;
