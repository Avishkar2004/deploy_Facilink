import React from 'react';
import { FaArrowRight, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PharmaceuticalBanner from "../../../assets/IndustriesweServe/pharmaceutical/Pharmaceutical.jpg";
import SpecializedSolutions from './SpecializedSolutions';

const Pharmaceutical = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                    src={PharmaceuticalBanner}
                    alt="Pharmaceutical Banner"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        PHARMACEUTICAL
                    </h1>
                    <p className="text-sm sm:text-lg md:text-2xl mt-2">
                        ENSURING SAFE, SECURED, HYGIENIC & AUDIT READY FACILITY
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 py-6 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-white">
                        {[{ value: "80", label: "CLIENTS" },
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
                <span>PHARMACEUTICAL</span>
            </div>

            {/* Pharmaceutical Service Section */}
            <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-20">
    <div className="flex flex-col gap-8 items-start">
        {/* Text Content */}
        <div className="w-full text-left">
            <h2 className="text-gray-800 text-lg sm:text-xl font-bold mb-4">
                PHARMACEUTICAL FACILITY MANAGEMENT – HYGIENIC, COMPLIANT & AUDIT-READY
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                Our pharmaceutical facility management services are designed to maintain the highest standards
                of hygiene, compliance, and operational efficiency. We cater to the needs of pharmaceutical
                companies by offering a holistic approach to facility maintenance, ensuring a sterile and
                contamination-free environment.
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                With a presence across multiple locations, our team of dedicated professionals utilizes advanced
                technologies such as <strong>robotic cleaning, automated maintenance, and predictive pest control</strong>.
                These solutions not only enhance operational effectiveness but also align with global regulatory
                frameworks, including <strong>USFDA, cGMP, and WHO-GMP</strong> compliance standards.
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                Our key offerings include:
            </p>
            <ul className="list-disc list-inside mt-2 text-sm sm:text-base md:text-lg text-gray-700">
                <li>Comprehensive sanitation and disinfection programs</li>
                <li>Air quality management and contamination control</li>
                <li>24/7 monitoring with real-time compliance tracking</li>
                <li>Trained professionals ensuring seamless operations</li>
                <li>Customized solutions for pharmaceutical production units</li>
            </ul>
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                By leveraging cutting-edge technology and industry best practices, we help pharmaceutical
                manufacturers maintain a facility that is not only audit-ready but also ensures the highest
                level of safety and efficiency. Our goal is to support your business in achieving
                <strong>uninterrupted production, enhanced compliance, and long-term sustainability</strong>.
            </p>
        </div>
    </div>
</div>



            <SpecializedSolutions />

        </div>
    );
};

export default Pharmaceutical;
