import React from 'react'
import Slider from 'react-slick';
import GardenAndHorticulture from '../../../assets/IndustriesweServe/Healthcare/gardening.jpg'
import PestControlManagement from "../../../assets/IndustriesweServe/Healthcare/pest.jpg"
import PatientCareAndInfectionControl from "../../../assets/IndustriesweServe/Healthcare/patient.jpg"
import LaundryOperationManagement from "../../../assets/IndustriesweServe/Healthcare/waste.jpg"
import AirborneInfectionControl from "../../../assets/IndustriesweServe/Healthcare/airborne.jpg"
import MechanizedCleaningHygiene from "../../../assets/IndustriesweServe/Healthcare/mechanised copy.jpg"
import EngineeringServices from "../../../assets/IndustriesweServe/Healthcare/engineering-services copy.jpg"
import WasteManagement from "../../../assets/IndustriesweServe/Healthcare/waste.jpg"
import CaseStudy from './CaseStudy';

const specializedSolutions = [
    {
        id: "GardenAndHorticulture",
        img: GardenAndHorticulture,
        title: "Garden And Horticulture",
        description:
            "We create and maintain green spaces within healthcare facilities, promoting a healing environment that supports patient recovery and well-being.",
    },
    {
        id: "PestControlManagement",
        img: PestControlManagement,
        title: "Pest Control Management",
        description:
            "We implement proactive pest control measures to prevent infestations, ensuring a safe and hygienic hospital environment with minimal risk of contamination.",
    },
    {
        id: "PatientCareAndInfectionControl",
        img: PatientCareAndInfectionControl,
        title: "Patient Care And Infection Control",
        description:
            "We deploy advanced sanitation techniques, strict hygiene protocols, and trained professionals to minimize cross-contamination and maintain a sterile healthcare setting.",
    },
    {
        id: "LaundryOperationManagement",
        img: LaundryOperationManagement,
        title: "Laundry Operation And Linen Management",
        description:
            "We provide seamless laundry and linen management services, ensuring hygienic, properly sanitized hospital textiles that meet the highest cleanliness standards.",
    },
    {
        id: "AirborneInfectionControl",
        img: AirborneInfectionControl,
        title: "Airborne Infection Control",
        description:
            "We enhance indoor air quality by utilizing advanced Upper-Room Ultraviolet Germicidal Irradiation (UVGI) technology, reducing airborne pathogens effectively.",
    },
    {
        id: "MechanizedCleaningHygiene",
        img: MechanizedCleaningHygiene,
        title: "Mechanized Cleaning & Hygiene",
        description:
            "We utilize modern cleaning technology and automated processes to maintain sterile, infection-free hospital environments with optimized resource utilization.",
    },
    {
        id: "EngineeringServices",
        img: EngineeringServices,
        title: "Engineering Services",
        description:
            "We provide comprehensive maintenance and engineering solutions to extend the lifespan of hospital infrastructure and prevent unplanned downtime.",
    },
    {
        id: "WasteManagement",
        img: WasteManagement,
        title: "Waste Management",
        description:
            "We ensure the safe handling and disposal of biomedical waste, strictly adhering to State Pollution Control Board regulations and environmental standards.",
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
};

export default SpecializedSolutions