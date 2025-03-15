import React from 'react'
import costOptimisation from "../../../assets/ESG/CostOptimisation/CostOptimisation.jpg"
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaHome } from 'react-icons/fa';
import OurServices from '../../OurServices';
import Enterpriseinfographic from "../../../assets/ESG/CostOptimisation/enterprise-infographic.png"
const CostOptimisation = () => {
    const internalSolutions = [
        {
            title: "E-Checklist",
            description:
                "A QR-based digital checklist system that streamlines task management, ensures SLA compliance, and provides real-time dashboards for clients to monitor progress.",
        },
        {
            title: "E-Invoice",
            description:
                "An automated invoicing solution that enhances accuracy, speeds up approval processes, and ensures timely digital submission of invoices for seamless financial transactions.",
        },
        {
            title: "E-Material",
            description:
                "A mobile application designed for real-time material requisitions, allowing businesses to efficiently track inventory, usage, and stock levels for optimal resource management.",
        },
        {
            title: "E-Onboarding",
            description:
                "A digital employee onboarding platform that uses Aadhar-based verification, simplifying documentation, payroll setup, PF, and ESIC compliance for a hassle-free hiring process.",
        },
        {
            title: "E-Attendance",
            description:
                "A smart attendance management system that enables supervisors to track employee presence in real time, ensuring accurate payroll processing and workforce accountability.",
        },
    ];

    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <img
                    src={costOptimisation}
                    alt="Cost Optimisation"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Cost Optimisation
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
                <span className="uppercase">
                    Cost Optimisation
                </span>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Internal Solutions Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="flex justify-center">
                        <img
                            src={Enterpriseinfographic}
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


            </div>

            <OurServices />
        </div>
    )
}

export default CostOptimisation