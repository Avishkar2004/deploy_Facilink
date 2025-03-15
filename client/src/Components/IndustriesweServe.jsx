import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommercialSpaces from "../assets/IndustriesweServe/commercial-spaces.webp";
import DataCenters from "../assets/IndustriesweServe/data-center-shot.webp";
import ResidentialSpaces from "../assets/IndustriesweServe/residential.jpg";
import Educationmanagementservices from "../assets/IndustriesweServe/education.jpg";
import Manufacturing from "../assets/IndustriesweServe/manufacturing.jpg";
import Pharmaceutical from "../assets/IndustriesweServe/pharmaceutical.jpg";
import Healthcare from "../assets/IndustriesweServe/health-care.jpg";
import { Link } from "react-router-dom";

const industries = [
    {
        id: "commercial-spaces-services",
        path: "/commercial-facility-management-services",
        img: CommercialSpaces,
        title: "Commercial Spaces",
        description:
            "Optimizing workplace efficiency with tailored Integrated Facility Management (IFM) solutions for high-performance commercial environments.",
    },
    {
        id: "data-centre-management-services",
        path: "/data-centre-management-services",
        img: DataCenters,
        title: "Data Centers",
        description:
            "Ensuring seamless operations with specialized IFM solutions designed to maintain 99.99% uptime and optimal infrastructure performance.",
    },
    {
        id: "residential-spaces-management-services",
        path: "/residential-facility-management",
        img: ResidentialSpaces,
        title: "Residential Spaces",
        description:
            "Delivering clean, secure, and well-maintained living spaces with customized IFM solutions for modern residential communities.",
    },
    {
        id: "education-management-services",
        path: "/education-services",
        img: Educationmanagementservices,
        title: "Education",
        description:
            "Creating safe, hygienic, and inspiring learning environments through world-class IFM solutions tailored for educational institutions.",
    },
    {
        id: "manufacturing-management-services",
        path: "/manufacturing-solutions",
        img: Manufacturing,
        title: "Manufacturing",
        description:
            "Enhancing productivity and operational efficiency with digitally integrated IFM solutions tailored to dynamic manufacturing needs.",
    },
    {
        id: "pharmaceuticals-management-services",
        path: "/pharmaceutical-facility-management",
        img: Pharmaceutical,
        title: "Pharmaceutical",
        description:
            "Maintaining compliance with USFDA and global standards, ensuring a safe, hygienic, and audit-ready pharmaceutical facility.",
    },
    {
        id: "healthcare-management-services",
        path: "/healthcare-integrated-facility-management",
        img: Healthcare,
        title: "Healthcare",
        description:
            "Implementing healthcare-specific IFM solutions to enhance patient care, prevent infections, and maintain high medical facility standards.",
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
        slidesToScroll: 3,
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
                            <h3 className="text-lg font-semibold mb-2 text-[#1d40a5]">{industry.title}</h3>
                            <p className="text-gray-600">{industry.description}</p>
                            <div className="flex justify-end mt-4">
                                <Link to={industry.path} className="text-[#1d40a5] font-semibold hover:text-blue-500 transition duration-300">
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default IndustriesWeServe;