import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";

const ClientTestimonial = () => {
    const testimonials = [
        {
            name: "Amit Sharma",
            location: "Mumbai",
            message:
                "I would like to appreciate your effort and dedication towards the compliance part, advancing to score 100% on the preliminary audit. We expect the same spirit to maintain and continue for all time to come.",
        },
        {
            name: "Neha Patel",
            location: "Pune",
            message:
                "We wholeheartedly appreciate all the efforts put up by Ajit Garad and Ramesh for the fantastic support given for the important activity. They are the true gems of the team.",
        },
        {
            name: "Ravi Verma",
            location: "Pune",
            message:
                "Housekeeping staff is doing the best job in this crisis, and we are sure that with these efforts, we will beat COVID-19! Thanks for your support.",
        },
        {
            name: "Sneha Kapoor",
            location: "Mumbai",
            message: "Excellent services and professionalism! Highly recommended.",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="w-full px-6 md:px-12 py-12 bg-gray-50">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 uppercase tracking-wide">
                Client Testimonials
            </h2>

            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-4">
                        <div className="h-[340px] flex flex-col justify-between p-8 bg-white rounded-2xl shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
                            <FaQuoteLeft className="text-3xl text-yellow-500 mb-3" />
                            <p className="text-gray-700 text-lg italic flex-grow">
                                "{testimonial.message}"
                            </p>
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold text-blue-800">{testimonial.name}</h3>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ClientTestimonial;
