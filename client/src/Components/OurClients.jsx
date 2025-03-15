import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import client1 from "../assets/OurClients/91SpringBoard.jpg";
import client2 from "../assets/OurClients/aeromall.png";
import client3 from "../assets/OurClients/amar-builders-logo.png";
import client4 from "../assets/OurClients/brickslogo.jpg";
import client5 from "../assets/OurClients/brookfield.png";
import client6 from "../assets/OurClients/coforge.png";
import client7 from "../assets/OurClients/efc.png";
import client8 from "../assets/OurClients/pride-purple.png";
import client9 from "../assets/OurClients/smartworks.jpg";
import client10 from "../assets/OurClients/trios.png";
import client11 from "../assets/OurClients/zaubacorp.png";

const ourClients = [
    { id: 1, img: client1, title: "91 SPRINGBOARD" },
    { id: 2, img: client2, title: "AEROMALL" },
    { id: 3, img: client3, title: "AMAR BUILDER" },
    { id: 4, img: client4, title: "BRICKS" },
    { id: 5, img: client5, title: "BROOKFIELD" },
    { id: 6, img: client6, title: "COFORGE" },
    { id: 7, img: client7, title: "EFC" },
    { id: 8, img: client8, title: "PRIDE PURPLE" },
    { id: 9, img: client9, title: "SMARTWORKS" },
    { id: 10, img: client10, title: "TRIOS" },
    { id: 11, img: client11, title: "ZAUBACORP" }
];

const CustomPrevArrow = (props) => (
    <div
        {...props}
        className="absolute left-[-40px] md:left-[-30px] sm:left-[-20px] top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-1 rounded-full shadow-lg cursor-pointer z-10 hover:bg-yellow-600"
    >
        <FaChevronLeft size={20} />
    </div>
);

const CustomNextArrow = (props) => (
    <div
        {...props}
        className="absolute right-[-40px] md:right-[-30px] sm:right-[-20px] top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-1 rounded-full shadow-lg cursor-pointer z-10 hover:bg-yellow-600"
    >
        <FaChevronRight size={20} />
    </div>
);

const OurClients = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3, // Default (Desktop)
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        centerMode: true,
        centerPadding: "20px",
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024, // Tablets
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640, // Mobile
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="py-10 text-center relative">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">OUR CLIENTS</h2>
            <div className="max-w-6xl mx-auto px-10">
                <Slider {...settings}>
                    {ourClients.map((client) => (
                        <div key={client.id} className="px-4">
                            <h3 className="text-lg font-medium text-gray-700 mt-4">{client.title}</h3>
                            <div className="bg-white p-6 rounded-xl">
                                <img
                                    src={client.img}
                                    alt={client.title}
                                    className="w-64 h-64 md:w-60 md:h-60 sm:w-48 sm:h-48 object-contain mx-auto rounded-lg hover:scale-105 transition-transform duration-200"
                                />

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default OurClients;
