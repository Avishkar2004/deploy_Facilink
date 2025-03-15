import React from 'react'
import DtssOverviews from "../../../assets/AboutUs/DtssOverview/download (1).jpg"
import { FaArrowRight, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import OurValues from './OurValues'


const DtssOverview = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                    src={DtssOverviews}
                    alt="FacilinkOverviews"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
                        Facilink Overviews
                    </h1>
                </div>
            </div>
            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-white">
                        {[{ value: "500", label: "CLIENTS" },
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
            <div className="bg-gray-100 p-4 flex items-center justify-center sm:justify-start text-gray-600 text-sm gap-2">
                <Link to="/" className="flex items-center"><FaHome className="mr-1" /></Link>
                <FaArrowRight className="text-xs" />
                <span className='uppercase'>About Us</span>
                <FaArrowRight className="text-xs" />
                <span className='uppercase'>Facilink Overview</span>
            </div>

            <OurValues />
        </div>
    )
}


export default DtssOverview