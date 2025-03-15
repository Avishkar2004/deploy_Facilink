import React from 'react'
import Slider from 'react-slick';
import PestControlManagement from "../../../assets/IndustriesweServe/DataCenter/pest.jpg"
import FireProtection from "../../../assets/IndustriesweServe/DataCenter/fire.jpg"
import AssetOperationAndMaintenance from "../../../assets/IndustriesweServe/DataCenter/asset.jpg"
import SmartDustProgramme from "../../../assets/IndustriesweServe/DataCenter/SmartDust.jpg"
import EnergyManagement from "../../../assets/IndustriesweServe/DataCenter/energymanagment.jpg"
import CaseStudy from './CaseStudy';
const specializedSolutions = [
    {
        id: "FireProtection",
        img: FireProtection,
        title: "Fire Protection",
        description:
            "Our team ensures continuous monitoring and regular testing of your fire alarm systems, fire hydrant systems, and gas suppression systems. We aim to enhance the protection at all levels: building, room, and rack, while conducting periodic assessments for improved safety.",
    },
    {
        id: "PestControlManagement",
        img: PestControlManagement,
        title: "Pest Control Management",
        description:
            "We manage regular pest control procedures to ensure your facility remains free from harmful pests. This service includes consistent monitoring and treatment to reduce the risk of secondary infections and maintain a safe environment.",
    },
    {
        id: "AssetOperationAndMaintenance",
        img: AssetOperationAndMaintenance,
        title: "Asset Operation And Maintenance",
        description:
            "Our team handles the management of critical assets such as Chiller systems, fire control systems, CCTV, water panels, and pumps. We ensure regular checks, preventive maintenance, and system optimization to improve efficiency and extend the lifespan of your assets.",
    },
    {
        id: "SmartDustProgramme",
        img: SmartDustProgramme,
        title: "Smart Dust Programme",
        description:
            "Our team focuses on minimizing dust accumulation to prevent equipment failure. With mechanized sweeping, floor cleaning, and dust management, we maintain a dust-free environment that safeguards equipment and enhances operational efficiency.",
    },
    {
        id: "EnergyManagement",
        img: EnergyManagement,
        title: "Energy Management",
        description:
            "Our team ensures changeovers, regular checks, synchronization, fuel availability, and battery life monitoring. We focus on improving efficiency through regular power quality checks and implementing sustainable energy practices.",
    },
];

const SpecializedSolutions = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1436,
                settings: { slidesToShow: 3, slidesToScroll: 1 },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };
    return (
        <div className="w-full">
            <h2 className="text-xl ssm:text-2xl sm:text-3xl font-bold text-center my-6 text-gray-800">
                Industries We Serve
            </h2>

            {/* Slider Section */}
            <div className="bg-gray-50 py-2 px-4 sm:px-10 overflow-hidden">
                <Slider {...settings}>
                    {specializedSolutions.map((industry) => (
                        <div key={industry.id} className="p-4">
                          <div className="p-4 sm:p-6 cursor-pointer">
                                <div className="w-full h-[250px] ssm:h-[300px] sm:h-[350px] overflow-hidden">
                                    <img
                                        src={industry.img}
                                        alt={industry.title}
                                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
                                    />
                                </div>
                                <h3 className="text-base ssm:text-lg sm:text-xl font-semibold mt-4 text-[#2157e0] hover:text-red-600">
                                    {industry.title}
                                </h3>
                                <p className="text-gray-600 text-sm ssm:text-sm sm:text-sm mt-2">
                                    {industry.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <CaseStudy />
        </div>
    )
}

export default SpecializedSolutions