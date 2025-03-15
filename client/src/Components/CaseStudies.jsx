import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ManufacturingCaseStudy from "../assets/CaseStudies/manufacturing case-study1.jpg";
import CaseStudy1 from "../assets/CaseStudies/new-case-study1.jpg";
import CaseStudy2 from "../assets/CaseStudies/new-case-study2.jpg";
// import CaseStudy3 from "../assets/CaseStudies/new-case-study3.jpg";


const caseStudies = [
    { id: 1, img: ManufacturingCaseStudy, title: "Manufacturing Case Study" },
    { id: 2, img: CaseStudy1, title: "Case Study 1" },
    { id: 3, img: CaseStudy2, title: "Case Study 2" },
    // { id: 4, img: CaseStudy3, title: "Case Study 3" },

];

const CaseStudies = () => {
    const settings = {
        dots: false, // Hide dots for a cleaner look
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
    };

    return (
        <div className="flex flex-col items-center justify-center w-full py-10 bg-blue-50">
            <h2 className="text-3xl font-bold text-center my-6 text-gray-800">CASE STUDIES</h2>

            <div className="w-full max-w-6xl flex justify-center overflow-hidden">
                <Slider {...settings} className="w-full">
                    {caseStudies.map((caseStudy) => (
                        <div key={caseStudy.id} className="flex justify-center items-center">
                            <div className="relative w-full flex justify-center">
                                <img
                                    src={caseStudy.img}
                                    alt={caseStudy.title}
                                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-xl"
                                />

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CaseStudies;
