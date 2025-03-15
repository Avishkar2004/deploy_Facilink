//! This is a parent component for OurSolutions component

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommercialSpaces from "../../../assets/IndustriesweServe/commercial-spaces.jpg";
import DataCenters from "../../../assets/IndustriesweServe/data-centers-img.jpg";
import ResidentialSpaces from "../../../assets/IndustriesweServe/residential.jpg";
import Educationmanagementservices from "../../../assets/IndustriesweServe/education.jpg";
import Manufacturing from "../../../assets/IndustriesweServe/manufacturing.jpg";
import Pharmaceutical from "../../../assets/IndustriesweServe/pharmaceutical.jpg";
import Healthcare from "../../../assets/IndustriesweServe/health-care.jpg";

const industries = [
    {
        id: "commercial-spaces-services",
        img: CommercialSpaces,
        title: "Commercial Spaces",
        description:
            "IFM solutions are utilized to provide high-performance workspaces that deliver an efficient and effective work environment.",
    },
    {
        id: "data-centre-management-servicses",
        img: DataCenters,
        title: "Data Centers",
        description:
            "We provide reliable and responsive IFM solutions, tailor-made to keep your data center facility working at nearly 99.99% uptime.",
    },
    {
        id: "residential-spaces-management-services",
        img: ResidentialSpaces,
        title: "Residential Spaces",
        description:
            "Assuring clean & smart living spaces for your family by executing a bespoke IFM solution for your residential complex.",
    },
    {
        id: "education-management-services",
        img: Educationmanagementservices,
        title: "Education",
        description:
            "Enabling a safe, comfortable, and hygienic environment for your educational institutions by providing world-class IFM solutions that assure efficient learning.",
    },
    {
        id: "manufacturing-management-services",
        img: Manufacturing,
        title: "Manufacturing",
        description:
            "Support and enhance processes by customizing solutions to changing needs, implementing a digitally enabled Integrated Facility Management (IFM) solution.",
    },
    {
        id: "pharmaceuticals-management-services",
        img: Pharmaceutical,
        title: "Pharmaceutical",
        description:
            "Ensuring a safe, hygienic & cGMP-compliant, audit-ready facility by focusing on implementing USFDA & other compliant processes.",
    },
    {
        id: "healthcare-management-services",
        img: Healthcare,
        title: "Healthcare",
        description:
            "Providing the best possible patient care service & eradicating hospital-acquired infections by implementing functional and efficient Healthcare SOPs.",
    },
];

const IndustriesWeServe = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full px-7 py-10">
            <h2 className="text-3xl font-bold text-center my-6 text-gray-800">Industries We Serve</h2>

            <Slider {...settings}>
                {industries.map((industry) => (
                    <div key={industry.id} className="p-4">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img src={industry.img} alt={industry.title} className="w-full h-full object-cover rounded-lg mb-4" />
                            <h3 className="text-lg font-semibold mb-2 text-[#fcaf17]">{industry.title}</h3>
                            <p className="text-gray-600">{industry.description}</p>
                            <div className="flex justify-end mt-4">

                                <p className="right-0 font-semibold mb-2 text-[#fcaf17] hover:text-blue-500 cursor-pointer">Read More</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default IndustriesWeServe;