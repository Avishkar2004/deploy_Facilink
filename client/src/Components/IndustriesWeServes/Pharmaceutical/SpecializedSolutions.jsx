import React from 'react'
import Slider from 'react-slick';
import Robot from "../../../assets/IndustriesweServe/pharmaceutical/robot.jpg"
import ProductionSupportService from "../../../assets/IndustriesweServe/pharmaceutical/production-support.jpg"
import MESolution from "../../../assets/IndustriesweServe/pharmaceutical/engineering-services.jpg"
import IntegratedFacility from "../../../assets/IndustriesweServe/pharmaceutical/integrated-facility.jpg"
import PestManagmentSolution from "../../../assets/IndustriesweServe/pharmaceutical/pest copy.jpg"
import MechanizedCleaningHygine from "../../../assets/IndustriesweServe/pharmaceutical/mechanised copy.jpg"
import ClearRoomSolution from "../../../assets/IndustriesweServe/pharmaceutical/cleanroom.jpg"
import CaseStudy from './CaseStudy';
const specializedSolutions = [
    {
        id: "Robot",
        img: Robot,
        title: "Robotic Cleaning",
        description:
            "Our advanced robotic cleaning solutions ensure high efficiency, precision, and consistency in facility hygiene. Using automated systems with controlled chemical application, we minimize downtime, reduce costs, and eliminate cross-contamination risks. Additionally, our solution provides real-time reports, making audits seamless and hassle-free.",
    },
    {
        id: "ProductionSupportService",
        img: ProductionSupportService,
        title: "Production Support Services",
        description:
            "We provide a single-platform, self-delivered, and self-managed production support service, led by a dedicated manager ensuring accountability. Our goal is to streamline operations, optimize productivity, and provide real-time data-driven insights for critical decision-making in a cost-effective manner.",
    },
    {
        id: "MESolution",
        img: MESolution,
        title: "Mechanical & Electrical (M&E) Solutions",
        description:
            "We implement a systematic and technology-driven approach to manage M&E services efficiently. With extensive industry experience, our expert team ensures seamless service delivery while adhering to strict audit guidelines. Our innovative solutions enhance operational efficiency, ensuring compliance and sustainability.",
    },
    {
        id: "IntegratedFacility",
        img: IntegratedFacility,
        title: "Integrated Facility Management (IFM)",
        description:
            "We offer a comprehensive IFM solution that unifies multiple services under a single framework. From security and waste management to hygiene and infrastructure maintenance, our integrated approach enhances efficiency, reduces costs, and ensures smooth facility operations.",
    },
    {
        id: "PestManagmentSolution",
        img: PestManagmentSolution,
        title: "Pest Management Solutions",
        description:
            "Our tailored pest management programs are designed to prevent infestations, protect assets, and ensure compliance with hygiene standards. By integrating preventive and predictive strategies, we mitigate risks of contamination, safeguard workspaces, and uphold environmental health and safety.",
    },
    {
        id: "MechanizedCleaningHygine",
        img: MechanizedCleaningHygine,
        title: "Mechanized Cleaning & Hygiene",
        description:
            "With state-of-the-art mechanized cleaning techniques, we enhance hygiene standards while reducing manual effort. Our advanced cleaning systems ensure thorough sanitation, significantly reducing the spread of pathogens and maintaining a safer workspace.",
    },
    {
        id: "ClearRoomSolution",
        img: ClearRoomSolution,
        title: "Clean Room Solutions",
        description:
            "Maintaining high-standard clean rooms is critical in sensitive environments. Our specialized solutions ensure strict hygiene, controlled environments, and compliance with regulatory standards. With a unified and effective approach, we enhance air quality and reduce contamination risks.",
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

    );
};

export default SpecializedSolutions