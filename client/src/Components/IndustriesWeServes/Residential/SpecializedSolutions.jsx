import React from 'react'
import Slider from 'react-slick';
import PestControlManagement from "../../../assets/IndustriesweServe/DataCenter/pest.jpg"
import MosquitoControlManagement from "../../../assets/IndustriesweServe/Residental/mosq.jpg"
import ClubHouseManagement from "../../../assets/IndustriesweServe/Residental/club.webp"
import CleaningSolution from "../../../assets/IndustriesweServe/Residental/mechanised.webp"
import GardeningGround from "../../../assets/IndustriesweServe/Residental/gardening.jpg"
import CaseStudy from './CaseStudy';
const specializedSolutions = [
    {
        id: "PestControlManagement",
        img: PestControlManagement,
        title: "Pest Control Management",
        description:
            "Pest management in gated communities and townships requires an integrated approach. We will take care of that for you by maintaining the hygiene without compromising on the aesthetics by complying with all the audit requirements.",
    },
    {
        id: "MosquitoControlManagement",
        img: MosquitoControlManagement,
        title: "Mosquito Control Management",
        description:
            "Pest management in gated communities and townships requires an integrated approach. We will take care of that for you by maintaining the hygiene without compromising on the aesthetics by complying with all the audit requirements.",
    },
    {
        id: "ClubHouseManagement",
        img: ClubHouseManagement,
        title: "Club House Management",
        description:
            "Some of the key assets of a premises are its Chiller system, fire control system, CCTV, water panels and pumps. We ensure management of these systems in an effective manner.Engineering services-Our planned maintenance &engineering services help improve the lifespan of all your products and avoid all unplanned maintenance activities.",
    },
    {
        id: "CleaningSolution",
        img: CleaningSolution,
        title: "Cleaning Solution",
        description:
            "Usually, dusty surfaces contribute to majority of critical equipment failure. We lead the way with mechanized sweeping, floor cleaning and dust management programme. We believe in dust free environment to prevent adverse effects.",
    },
    {
        id: "GardeningGround",
        img: GardeningGround,
        title: "Gardening Ground & Maintenance",
        description:
            "Our team ensures changeovers, regular checks, synchronization, fuel availability and check on battery life. The other key aspect is to ensure that we build efficiencies with regularly power quality checks.",
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
                Specialized Solutions
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