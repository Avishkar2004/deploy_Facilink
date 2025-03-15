import React from 'react';
import CaseStudy1 from "../../../assets/CaseStudies/manufacturing case-study1.jpg";
import CaseStudy2 from "../../../assets/CaseStudies/new-case-study2.jpg";
import Slider from 'react-slick';

const caseStudy = [
    {
        id: 1,
        img: CaseStudy1,
        title: "Facilink Manufacturing Solutions is providing project and program management to bring a state-of-the-art, manufacturing facility online and fully operational in record time. Value Delivered: The facility was operational in just 2 months, allowing the client to realize 33% of their project return seven months ahead of schedule."
    },
    {
        id: 2,
        img: CaseStudy2,
        title: "Facilink Manufacturing Solutions is providing project and program management to bring a state-of-the-art, manufacturing facility online and fully operational in record time. Value Delivered: The facility was operational in just 2 months, allowing the client to realize 33% of their project return seven months ahead of schedule."
    }
];

const CaseStudy = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,  // Only show one image at a time
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
    };

    return (
        <div className="flex flex-col items-center justify-center w-full py-10">
            <h2 className="text-xl ssm:text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-3 sm:mb-5 mt-3 sm:mt-5">
                CASE STUDY
            </h2>
            {/* You can add bg-gray-100 on this div */}
            <div className="w-full px-2 sm:px-10 flex justify-center py-4 sm:py-8 overflow-hidden">
                <Slider {...settings} className="w-full">
                    {caseStudy.map((caseStudy) => (
                        <div key={caseStudy.id} className="flex justify-center items-center">
                            <div className="relative w-full flex justify-center">
                                <img
                                    src={caseStudy.img}
                                    alt={caseStudy.title}
                                    className="max-w-full max-h-[85vh] object-contain shadow-lg"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default CaseStudy;
