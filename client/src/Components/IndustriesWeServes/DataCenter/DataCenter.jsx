import React from 'react';
import { FaArrowRight, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DataCenterLogo from "../../../assets/IndustriesweServe/DataCenter/Data_Center.jpg";
import SpecializedSolutions from './SpecializedSolutions';

const DataCenter = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                    src={DataCenterLogo}
                    alt="Pharmaceutical Banner"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        DATA CENTRE
                    </h1>
                    <p className="text-sm sm:text-lg md:text-2xl mt-2">
                        FACILITATING CLEANER, SAFER & SMARTER DATA CENTRES
                    </p>
                </div>
            </div>
            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-white">
                        {[{ value: "500", label: "CLIENTS" },
                        { value: "3+", label: "Service Team" },
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
            <div className="bg-gray-100 p-4 flex items-center justify-center sm:justify-start text-gray-600 text-sm gap-2">
                <Link to="/" className="flex items-center"><FaHome className="mr-1" /></Link>
                <FaArrowRight className="text-xs" />
                <span className='uppercase'>Industries We Serve</span>
                <FaArrowRight className="text-xs" />
                <span>DATA CENTRE</span>
            </div>

            {/* Pharmaceutical Service Section */}
            <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-20">
                <div className="flex flex-col gap-8 items-start">
                    {/* Text Content */}
                    <div className="w-full text-left">
                        <h2 className="text-gray-800 text-lg sm:text-xl font-bold mb-4">
                            DATA CENTRE SOLUTIONS - ENSURING CLEAN, SAFE & EFFICIENT OPERATIONS
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                            Our data centre facility management services are designed to maintain a pristine,
                            temperature-controlled, and secure environment, ensuring uninterrupted operations and
                            enhanced equipment longevity. We employ advanced <strong>predictive and preventive maintenance</strong>
                            strategies to optimize asset performance and prevent downtime.
                        </p>
                        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                            By integrating cutting-edge technology and best practices, we ensure compliance with
                            industry standards and regulatory requirements. Our services focus on delivering
                            <strong>efficiency, cost-effectiveness, and infrastructure resilience</strong> to meet the evolving demands
                            of data centre operations.
                        </p>
                        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                            Our key offerings include:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-sm sm:text-base md:text-lg text-gray-700">
                            <li>Comprehensive HVAC and air quality management</li>
                            <li>Real-time monitoring and predictive analytics</li>
                            <li>24/7 emergency support and incident management</li>
                            <li>Secure access control and surveillance integration</li>
                            <li>Energy-efficient power and cooling solutions</li>
                        </ul>
                        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                            Our commitment to innovation and operational excellence ensures that data centres remain
                            <strong>reliable, resilient, and optimized for peak performance</strong>. With our tailored solutions,
                            businesses can achieve long-term sustainability and efficiency.
                        </p>
                    </div>
                </div>
            </div>



            <SpecializedSolutions />

        </div>
    );
};

export default DataCenter;
