import React from "react";
import TreeImg from "../../../assets/AboutUs/DtssOverview/treeimg.png";
import { FaUserTie, FaUsers, FaClipboardCheck, FaBalanceScale, FaUserCircle, FaLightbulb } from "react-icons/fa";
import OurServices from "../../OurServices";

const values = [
    {
        title: "PROFESSIONALISM",
        text: "Demonstrating excellence, commitment, and integrity in every task while fostering a positive and respectful work environment.",
        icon: <FaUserTie className="text-4xl text-black" />
    },
    {
        title: "TEAM SPIRIT",
        text: "Encouraging collaboration, unity, and shared success by supporting and uplifting one another in all endeavors.",
        icon: <FaUsers className="text-4xl text-black" />
    },
    {
        title: "ACCOUNTABILITY",
        text: "Owning responsibilities, delivering results with dedication, and continuously striving for improvement and excellence.",
        icon: <FaClipboardCheck className="text-4xl text-black" />
    },
    {
        title: "INTEGRITY",
        text: "Upholding honesty, transparency, and ethical values to build trust and long-lasting relationships with all stakeholders.",
        icon: <FaBalanceScale className="text-4xl text-black" />
    },
    {
        title: "CUSTOMER FOCUS",
        text: "Delivering exceptional services with a customer-centric approach, ensuring trust, loyalty, and long-term satisfaction.",
        icon: <FaUserCircle className="text-4xl text-black" />
    },
    {
        title: "INNOVATION",
        text: "Embracing creativity, cutting-edge solutions, and a forward-thinking mindset to drive progress and lead in the industry.",
        icon: <FaLightbulb className="text-4xl text-black" />
    },
];

const OurValues = () => {
    return (
        <div className="relative flex flex-col justify-center items-center py-10 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5 text-center">OUR VALUES</h2>

            {/* Large Screen Layout */}
            <div className="hidden sm:flex flex-col items-center relative max-w-[800px] mx-auto">
                <img src={TreeImg} alt="Our Values Tree" className="w-full max-w-[600px] md:max-w-[700px] mx-auto" />
                <div className="grid grid-cols-2 gap-8 absolute top-0 w-full px-10">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-col items-center text-center w-full">
                            <div className="w-24 h-24 flex flex-col justify-center items-center">
                                {value.icon}
                                <h3 className="text-sm font-bold text-black mt-2">{value.title}</h3>
                            </div>
                            <p className="text-xs max-w-[180px] mt-2 text-black">{value.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Small Screen Layout */}
            <div className="flex flex-col items-center sm:hidden w-full space-y-6">
                <img src={TreeImg} alt="Our Values Tree" className="max-w-[300px] mx-auto mb-6" />
                {values.map((value, index) => (
                    <div key={index} className="flex flex-col items-center text-center w-full px-4">
                        <div className="w-24 h-24 flex flex-col justify-center items-center">
                            {value.icon}
                            <h3 className="text-sm font-bold text-black mt-2">{value.title}</h3>
                        </div>
                        <p className="text-xs max-w-[250px] mt-2 text-black">{value.text}</p>
                    </div>
                ))}
            </div>

            <OurServices />
        </div>
    );
};

export default OurValues;
