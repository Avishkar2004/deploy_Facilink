import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FacilinkLogo from "../assets/Header/logo512.png";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-6 md:px-10 shadow-sm bg-white relative" >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={FacilinkLogo} alt="Facilink Logo" className="w-64 h-auto object-contain flex-shrink-1" />
          </Link>
        </div>
        {/* Hamburger Menu (Visible on Small Screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
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
                  { name: "Pharma Support Services", path: "/pharma_support" }
                ]
              },
              {
                title: "About Us", options: [
                  { name: "  Facilink Overview", path: '/about-us' },
                ]
              },
              {
                title: "Resource Library", options: [
                  { name: "Blogs", path: "/blogs" }
                ]
              },
              {
                title: "IFM 2.0", options: [
                  // { name: "ESG", path: "/esg-sustainability-commitment" },
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
              <li key={index} className="group relative cursor-pointer flex items-center space-x-1">
                {menu.title} <FaChevronDown className="text-xs text-gray-500 mt-1" />
                <ul className={`absolute top-full mt-0 w-56 bg-white text-gray-800 p-3 hidden group-hover:flex flex-col rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 ${["Media", "Contact"].includes(menu.title) ? "right-0 left-auto" : "left-0"}`}>
                  {menu.options.map((option, idx) => (
                    <li key={idx} className="px-4 py-2 border gap-3 hover:bg-gray-200 rounded-md transition-all">
                      <Link to={option.path}>{option.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation (Visible when Open) */}
      <nav className={`fixed top-0 left-0 w-full h-full bg-white shadow-md transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden z-50`}>
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <Link to="/">
            <img src={FacilinkLogo} alt="  Facilink Logo" className="w-24 h-auto" />
          </Link>
          <button onClick={() => setIsOpen(false)} className="text-gray-700 text-2xl focus:outline-none">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-6">
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
                { name: "Pharma Support Services", path: "/pharma_support" }
              ]
            },
            {
              title: "About Us", options: [
                { name: "  Facilink Overview", path: '/about-us' },
              ]
            },
            {
              title: "Resource Library", options: [
                { name: "Blogs", path: "/blogs" }
              ]
            },
            {
              title: "IFM 2.0", options: [
                // { name: "ESG", path: "/esg-sustainability-commitment" },
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
            }].map((menu, index) => (
              <li key={index} className="group relative cursor-pointer">
                <div className="flex items-center justify-between">
                  {menu.title}
                  <FaChevronDown className="text-xs text-gray-500" />
                </div>
                <ul className="pl-4 mt-2 space-y-2 hidden group-hover:block">
                  {menu.options.map((option, idx) => (
                    <li key={idx} className="px-2 py-1 hover:bg-gray-200 rounded-md transition-all">
                      <Link to={option.path}>{option.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
