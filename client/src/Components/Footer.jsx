import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Header/Logo2.jpg";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 px-4">
            <div className="max-w-8xl mx-auto">
                {/* Corporate Office and Options */}
                <div className="flex flex-col lg:flex-row justify-between mb-4 space-y-6 lg:space-y-0">
                    {/* Logo and Corporate Address */}
                    <div className="flex flex-col items-center lg:items-start space-y-4 lg:w-1/4">
                        <img src={Logo} alt="DTS Logo" className="w-32 sm:w-40 md:w-48 lg:w-40 rounded-md" />
                        <div className="text-center lg:text-left">
                            <h3 className="text-sm font-bold">CORPORATE OFFICE</h3>
                            <p className="text-xs">
                                101, B wing, Yogeshwar arcade, <br />
                                Near PGI hotel, New Nana peth, <br />
                                Pune- 411002, Maharashtra, India
                            </p>
                        </div>
                    </div>
                    {/* Options Layout */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 text-xs w-full">
                        {[
                            {
                                title: "Industries We Serve", options: [
                                    { name: "Manufacturing", path: "/manufacturing-solutions" },
                                    { name: "Pharmaceutical", path: "/pharmaceutical-facility-management" },
                                    { name: "Healthcare", path: "/healthcare-integrated-facility-management" },
                                    { name: "Commercial Spaces", path: "/commercial-facility-management-services" },
                                    { name: "Data Centres", path: "/data-centre-management-services" },
                                    { name: "Residential Spaces", path: "/residential-facility-management" },
                                    { name: "Education", path: "/education-services" }
                                ]
                            },
                            {
                                title: "Our Solutions", options: [
                                    { name: "Engineering Services", path: "/engineering-services" },
                                    { name: "Soft Services", path: "/soft_services" },
                                    { name: "Business Support Services", path: "/business-support-services" },
                                    { name: "Production Support Services", path: "/production-support-services" },
                                    { name: "Horticulture Services", path: "/horticulture_services" },
                                    { name: "Hospitality Services", path: "/hospitality_services" },
                                    { name: "Pharma Solutions", path: "/pharma_solutions" }
                                ]
                            },
                            {
                                title: "About Us", options: [
                                    { name: "  Facilink Overview", path: "/about-us" },
                                ]
                            },
                            {
                                title: "Resource Library", options: [
                                    { name: "Blogs", path: "/blogs" }
                                ]
                            },
                            {
                                title: "IFM 2.0", options: [
                                    { name: "Digitization", path: "/digitisation-solutions" },
                                    { name: "Automation", path: "/automation-solutions" },
                                    { name: "Cost Optimisation", path: "/cost_optimization" },
                                ]
                            },
                            {
                                title: "Media", options: [
                                    { name: "Gallery", path: "/gallery" },
                                ]
                            },
                            {
                                title: "Contact", options: [
                                    { name: "Branch Office Locator", path: "/branch-locator" }
                                ]
                            }
                        ].map((menu, index) => (
                            <div key={index} className="space-y-2 text-center md:text-left">
                                <h4 className="font-semibold border-b-2 border-yellow-400 pb-1 inline-block">{menu.title}</h4>
                                <ul className="space-y-2">
                                    {menu.options.map((option, idx) => (
                                        <li key={idx}>
                                            <Link to={option.path} className="hover:text-yellow-400 cursor-pointer">
                                                {option.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-xs mt-6 border-t border-gray-600 pt-4">
                Privacy Policy | Copyright ©2025 All rights reserved
            </div>
        </footer>
    );
};

export default Footer;
