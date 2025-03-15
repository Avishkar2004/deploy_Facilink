import React from "react";
import Digitisations from "../../../assets/ESG/Digitisation/download.jpg";
import { FaArrowRight, FaCheckCircle, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import imgLeft from "../../../assets/ESG/Digitisation/lap.jpg"
import imgRight from "../../../assets/ESG/Digitisation/digital-customer.webp"
const Digitisation = () => {
    const internalSolutions = [
        {
            title: "E-Checklist",
            description:
                "A QR-based digital checklist system that enhances workflow tracking, ensures SLA compliance, and offers real-time reporting through interactive dashboards.",
        },
        {
            title: "E-Invoice",
            description:
                "A secure and automated digital invoicing system that streamlines billing, reduces errors, and enables quick approvals for faster payments.",
        },
        {
            title: "E-Material",
            description:
                "An intuitive Android-based application for managing material requests, enabling real-time stock monitoring, usage tracking, and inventory control.",
        },
        {
            title: "E-Onboarding",
            description:
                "A streamlined Aadhar-based onboarding platform that ensures accurate employee verification while simplifying banking, PF, and ESIC processes.",
        },
        {
            title: "E-Attendance",
            description:
                "A real-time attendance management app for supervisors, providing instant verification and seamless payroll processing for employees.",
        },
    ];

    const customerSolutions = [
        {
            title: "CSAT",
            description:
                "A customer satisfaction tracking app that gathers feedback, analyzes responses, and generates insights for continuous service improvements.",
        },
        {
            title: "OYC (Own Your Customer)",
            description:
                "A client relationship management tool that tracks interactions, manages service expectations, and enhances customer engagement strategies.",
        },
        {
            title: "Carpet Maintenance",
            description:
                "A digital platform for scheduling, tracking, and managing carpet cleaning services to ensure hygiene and longevity.",
        },
        {
            title: "Facilink MITRA",
            description:
                "A centralized HR solution that provides employees and clients with seamless access to important documents, policies, and assistance.",
        },
        {
            title: "Asset Tracking",
            description:
                "A real-time asset management system that enables businesses to track inventory, monitor sales, and streamline auditing processes.",
        },
        {
            title: "Workflow",
            description:
                "A workflow automation tool that digitizes operations, enhances productivity, and minimizes manual administrative efforts.",
        },
        {
            title: "NEFT",
            description:
                "A reliable and secure digital payment gateway that simplifies fund transfers and ensures smooth financial transactions.",
        },
    ];

    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                    src={Digitisations}
                    alt="Digitisation"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Facilink Digital solutions
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
                <span className="uppercase">Facilink Digital solutions</span>
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

        </div>
    );
};



export default Digitisation