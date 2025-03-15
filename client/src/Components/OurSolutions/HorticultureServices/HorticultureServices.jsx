import React from 'react'
import HorticultureService from "../../../assets/OurSolution/Horticulture Services/download.jpg"
import { FaArrowRight, FaCheck, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import IndustriesWeServe from '../../IndustriesweServe'

const HorticultureServices = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                    src={HorticultureService}
                    alt="Horticulture Services"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
                        Horticulture Services
                    </h1>
                </div>
            </div>
            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
                        {[
                            { value: "420", label: "CLIENTS" },
                            { value: "3+", label: "Service Team" },
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
                <span className='uppercase'>Horticulture Services</span>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Right Side - Horticulture Service Advantages */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-blue-600 p-6 rounded-lg shadow-md w-full max-w-lg">
                            <h2 className="text-lg font-bold mb-4 text-white">Our Expertise Includes</h2>
                            <p className="font-normal mb-4 text-white">
                                We enhance outdoor and indoor environments with the following horticulture solutions:
                            </p>
                            {/* Advantages List */}
                            <ul className="space-y-2 text-white">
                                {[
                                    "Landscape design and maintenance",
                                    "Seasonal plantation and greenery enhancement",
                                    "Lawn care and irrigation management",
                                    "Indoor and outdoor plant care",
                                    "Pest and disease control for plants",
                                    "Eco-friendly waste management solutions"
                                ].map((advantage, index) => (
                                    <li key={index} className="flex items-center font-normal sm:text-base">
                                        <FaCheck className="mr-2 text-white" /> {advantage}
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-green-400 text-black font-normal text-center p-4 mt-4 rounded-lg shadow-md">
                                <Link to="/">Need specialized horticulture solutions? Contact us now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Left Side - Main Content */}
                    <div className="order-2 lg:order-1">
                        <p className="mb-1 text-2xl font-semibold">
                            Creating Greener and Sustainable Spaces
                        </p>
                        <p className="mb-1">
                            Our horticulture services help maintain and enhance green spaces, creating a refreshing and aesthetically pleasing environment for businesses and healthcare facilities.
                        </p>
                        <p className="mb-1">
                            We specialize in landscape design, plant maintenance, irrigation management, and pest control, ensuring a sustainable and eco-friendly outdoor experience.
                        </p>
                        <p className="mb-1">
                            Our expert team works diligently to maintain gardens, parks, and indoor green spaces, promoting better air quality and a healthier ecosystem.
                        </p>
                        <p className="mb-1">
                            With advanced horticulture techniques and modern landscaping solutions, we enhance outdoor aesthetics while ensuring environmental sustainability.
                        </p>
                        <p className="mb-1">
                            Whether it's a corporate landscape or a healthcare garden, our customized horticulture solutions improve well-being and create a soothing environment.
                        </p>
                    </div>
                </div>
            </div>

            <IndustriesWeServe />
        </div>
    )
}



export default HorticultureServices