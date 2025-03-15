import React from 'react'
import Slider from 'react-slick';
import PestControlManagement from "../../../assets/IndustriesweServe/Education/pest-management.jpg"
import BuildingMaintenance from "../../../assets/IndustriesweServe/Education/building.jpg"
import SmartSurfaceprogramme from "../../../assets/IndustriesweServe/Education/smart-surface-disinfection.jpg"
import EngineeringServices from "../../../assets/IndustriesweServe/Education/engineering-services copy.jpg"
import Antimicrobial from "../../../assets/IndustriesweServe/Education/airborne-infection-prevention-and-control.png"
import Airborneinfectioncontrol from "../../../assets/IndustriesweServe/Education/airborne.jpg"
import SupportService from "../../../assets/IndustriesweServe/Education/support.jpg"
import CaseStudy from './CaseStudy';

const specializedSolutions = [
  {
    id: "BuildingMaintenance",
    img: BuildingMaintenance,
    title: "Building Maintenance",
    description:
      "We ensure comprehensive building maintenance, including fire protection systems, fire alarms, hydrants, and gas suppression systems. Our multi-level safety approach secures the building, rooms, and critical infrastructure.",
  },
  {
    id: "PestControlManagement",
    img: PestControlManagement,
    title: "Pest Control Management",
    description:
      "Regular pest control services minimize health risks and secondary infections, ensuring a safer and more hygienic environment for occupants.",
  },
  {
    id: "SmartSurfaceProgramme",
    img: SmartSurfaceprogramme,
    title: "Smart Surface Programme",
    description:
      "We manage key assets such as chiller systems, fire control systems, CCTV, water panels, and pumps with efficiency. Our integrated approach ensures smooth operations, reducing downtime and maintenance costs.",
  },
  {
    id: "EngineeringServices",
    img: EngineeringServices,
    title: "Engineering Services",
    description:
      "We prevent critical equipment failures through mechanized cleaning, dust management, and maintenance programs, ensuring optimal operational efficiency and compliance.",
  },
  {
    id: "Antimicrobial",
    img: Antimicrobial,
    title: "Antimicrobial Protection",
    description:
      "Our specialized antimicrobial solutions enhance surface hygiene, reduce pathogen spread, and ensure long-term cleanliness in high-risk environments.",
  },
  {
    id: "AirborneInfectionControl",
    img: Airborneinfectioncontrol,
    title: "Airborne Infection Control",
    description:
      "We implement air purification technologies to maintain high indoor air quality, reducing airborne contaminants and infection risks in critical areas.",
  },
  {
    id: "SupportService",
    img: SupportService,
    title: "Support Services",
    description:
      "Our support services include real-time monitoring, power quality checks, and infrastructure management, ensuring uninterrupted and efficient operations.",
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
}

export default SpecializedSolutions