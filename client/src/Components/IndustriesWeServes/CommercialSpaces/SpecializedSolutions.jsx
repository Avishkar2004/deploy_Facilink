import React from 'react'
import Slider from 'react-slick';
import Robot from "../../../assets/IndustriesweServe/pharmaceutical/robot.jpg"
import ProductionSupportService from "../../../assets/IndustriesweServe/pharmaceutical/production-support.jpg"
import MESolution from "../../../assets/IndustriesweServe/pharmaceutical/engineering-services.jpg"
import IntegratedFacility from "../../../assets/IndustriesweServe/pharmaceutical/integrated-facility.jpg"
import PestManagmentSolution from "../../../assets/IndustriesweServe/pharmaceutical/pest.jpg"
import MechanizedCleaningHygine from "../../../assets/IndustriesweServe/pharmaceutical/mechanised copy.jpg"
import ClearRoomSolution from "../../../assets/IndustriesweServe/pharmaceutical/cleanroom.jpg"
import CaseStudy from './CaseStudy';

const specializedSolutions = [
    {
        id: "Robot",
        img: Robot,
        title: "Robot Cleaning",
        description:
            "A well-defined and controlled cleaning program using specified chemical helps in high productivity and consistent cleaning. It reduces time and is cost effective with absolutely no risk of cross contamination. It also provides timely reports for audit purposes.",
    },
    {
        id: "ProductionSupportService",
        img: ProductionSupportService,
        title: "Production Support Service",
        description:
            "We provide single platform, self-delivered and self-managed services through a manager who will be accountable. The aim is to provide real time data and critical analysis in a cost-effective manner.",
    },
    {
        id: "MESolution",
        img: MESolution,
        title: "M&E Solution",
        description:
            "We ensure that a systemic approach is utilised that we have previously applied to many other industries. A delivery system guided by an experienced team is responsible for managing the entire services. We use the latest technology, applying learnings from all our previous endeavours. We add value to our service by complying with all the audit procedures.",
    },
    {
        id: "IntegratedFacility",
        img: IntegratedFacility,
        title: "Integrated Facility Management Service",
        description:
            "We bring all our services under one banner which includes managing the premises or looking after other aspects like security, cleaning or ensuring management of waste. The benefit of implementing IFM is that we have unified approach in delivering our services.",
    },
    {
        id: "PestManagmentSolution",
        img: PestManagmentSolution,
        title: "Pest Managment Solution",
        description:
            "A customised and integrated approach is key to pest management. To ensure that there is no food contamination or damage to the aesthetics and general hygiene or no damage to property, a comprehensive solution is essential",
    },
    {
        id: "MechanizedCleaningHygine",
        img: MechanizedCleaningHygine,
        title: "Mechanized Cleaning & Hygiene",
        description:
            "Through our experience, we have observed that contaminated surfaces contribute majority of the transmission of pathogens...",
    },
    {
        id: "ClearRoomSolution",
        img: ClearRoomSolution,
        title: "Clear Room Solution",
        description:
            "High risk areas need to be managed with a solution that establishes excellent hygiene. To achieve this rolling out one single comprehensive solution is the key to maintain high clean room standard.",
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