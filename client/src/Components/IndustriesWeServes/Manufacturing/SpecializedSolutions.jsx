import React from "react";
import Payroll from "../../../assets/IndustriesweServe/Manufacturing/payroll.jpg";
import PestControl from "../../../assets/IndustriesweServe/Manufacturing/pest.jpg";
import PorductSupport from "../../../assets/IndustriesweServe/Manufacturing/production-support.jpg";
import EngineeringAudit from "../../../assets/IndustriesweServe/Manufacturing/engineering-services.jpg";
import MechanizedCleaningHygine from "../../../assets/IndustriesweServe/Manufacturing/mechanised.jpg";
import Utility from "../../../assets/IndustriesweServe/Manufacturing/utility.jpg";
import GardenAndHorticulture from "../../../assets/IndustriesweServe/Manufacturing/gardening.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CaseStudy from "./CaseStudy";

const specializedSolutions = [
    {
        id: "Payroll",
        img: Payroll,
        title: "Payroll Management",
        description:
            "We handle end-to-end payroll processing, ensuring timely and accurate salary disbursement while maintaining compliance with labor laws.",
    },
    {
        id: "PestControl",
        img: PestControl,
        title: "Pest Control Management",
        description:
            "Our expert pest management solutions safeguard your facility from infestations, ensuring a hygienic and compliant work environment.",
    },
    {
        id: "ProductionSupport",
        img: PorductSupport,
        title: "Production Support",
        description:
            "Our skilled workforce enhances operational efficiency by providing comprehensive support in equipment maintenance and process optimization.",
    },
    {
        id: "EngineeringAudit",
        img: EngineeringAudit,
        title: "Engineering & Energy Audit",
        description:
            "We conduct thorough engineering and energy audits, identifying inefficiencies and optimizing resource utilization for cost-effective operations.",
    },
    {
        id: "MechanizedCleaningHygiene",
        img: MechanizedCleaningHygine,
        title: "Mechanized Cleaning & Hygiene",
        description:
            "We deploy advanced mechanized cleaning techniques to eliminate contaminants, ensuring a sanitized and safe workspace.",
    },
    {
        id: "Utility",
        img: Utility,
        title: "Utility Operations & Maintenance",
        description:
            "Our team ensures seamless operation and maintenance of utilities, reducing downtime and improving overall efficiency.",
    },
    {
        id: "GardenAndHorticulture",
        img: GardenAndHorticulture,
        title: "Garden & Horticulture Management",
        description:
            "We create and maintain lush green spaces around your facility, enhancing aesthetics and promoting a healthier environment.",
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
            {/* Have to make it responsive */}
            <CaseStudy />
        </div>
    );
};

export default SpecializedSolutions;
