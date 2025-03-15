import React from "react";
import Logo from "../../../assets/ESG/Automation/logo.jpg";
import { FaArrowRight, FaCheckCircle, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import imgLeft from "../../../assets/ESG/Automation/walkbehind.jpg"
import imgRight from "../../../assets/ESG/Automation/rideon.jpg"
import OurServices from "../../OurServices";
const Automation = () => {
    const internalSolutions = [
        {
            title: "E-Checklist",
            description:
                "A QR-based digital checklist system that ensures task completion, tracks SLA adherence, and provides clients with real-time performance insights via dashboards.",
        },
        {
            title: "E-Invoice",
            description:
                "An automated digital invoicing solution that facilitates accurate billing, timely submissions, and seamless approval workflows for clients.",
        },
        {
            title: "E-Material",
            description:
                "A mobile application that streamlines material requisitions, allowing real-time tracking of stock levels, usage, and inventory management.",
        },
        {
            title: "E-Onboarding",
            description:
                "A digital onboarding platform that simplifies employee verification using Aadhar, expediting bank account openings, PF registration, and ESIC compliance.",
        },
        {
            title: "E-Attendance",
            description:
                "A real-time attendance monitoring system for supervisors, providing automated verification, streamlined payroll integration, and detailed reporting dashboards.",
        },
    ];


    const customerSolutions = [
        {
            title: "CSAT",
            description:
                "A customer satisfaction tracking system that collects real-time feedback, analyzes responses, and generates actionable insights for service improvements.",
        },
        {
            title: "OYC (Own Your Customer)",
            description:
                "A CRM tool that helps track and manage high-value client interactions, ensuring enhanced customer experience and service personalization.",
        },
        {
            title: "Carpet Maintenance",
            description:
                "A smart tracking system for scheduling and managing carpet cleaning services, ensuring hygiene and long-term maintenance.",
        },
        {
            title: "Facilink MITRA",
            description:
                "A centralized HR management app that provides employees with easy access to documents, company policies, and support services across multiple locations.",
        },
        {
            title: "Asset Tracking",
            description:
                "An advanced digital asset management system that enables real-time monitoring of inventory, sales, and compliance audits.",
        },
        {
            title: "Workflow",
            description:
                "A process automation solution that optimizes administrative workflows, improves efficiency, and reduces manual effort in daily operations.",
        },
        {
            title: "NEFT",
            description:
                "A secure and seamless digital payment gateway that simplifies financial transactions, ensuring quick and hassle-free payments for clients.",
        },
    ];

    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                    src={Logo}
                    alt="Logo"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Automation
                    </h1>
                </div>
            </div>

            {/* Breadcrumb Navigation */}
            <div className="bg-gray-100 p-4 flex items-center justify-center sm:justify-start text-gray-600 text-sm gap-2">
                <Link to="/" className="flex items-center">
                    <FaHome className="mr-1" />
                </Link>
                <FaArrowRight className="text-xs" />
                <span className="uppercase">IFM 2.0</span>
                <FaArrowRight className="text-xs" />
                <span className="uppercase">Facilink Automation</span>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Internal Solutions Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="flex justify-center">
                        <img
                            src={imgLeft}
                            alt="Digital Operations"
                            className="w-full max-w-md h-auto object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                            We use following digital applications to run our operations, making processes efficient & transparent:
                        </h2>
                        <ul className="mt-4 space-y-4 text-gray-700">
                            {internalSolutions.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-600 text-lg mt-1" />
                                    <div>
                                        <strong>{item.title} - </strong>
                                        {item.description}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Customer Solutions Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                            Our customer-facing digital solutions provide accurate & on-time reports, building transparency and trust:
                        </h2>
                        <ul className="mt-4 space-y-4 text-gray-700">
                            {customerSolutions.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-600 text-lg mt-1" />
                                    <div>
                                        <strong>{item.title} - </strong>
                                        {item.description}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={imgRight}
                            alt="Customer Solutions"
                            className="w-full max-w-md h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            <OurServices />
        </div>
    );
};




export default Automation