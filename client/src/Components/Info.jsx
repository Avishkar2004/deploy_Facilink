import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Info = () => {
    return (
        <div className="bg-[#58585a] text-white px-4 md:px-[10%] py-3">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm md:text-base">
                    {/* Phone */}
                    <a href="tel:+919960198201" className="flex items-center space-x-2 hover:text-yellow-400 transition duration-300">
                        <CallIcon className="text-yellow-400 text-sm md:text-base" />
                        <span>+91 99601 98201</span>
                    </a>

                    {/* Email */}
                    <a href="mailto:facilinksolutions@gmail.com" className="flex items-center space-x-2 hover:text-yellow-400 transition duration-300">
                        <EmailIcon className="text-yellow-400 text-sm md:text-base" />
                        <span>facilinksolutions@gmail.com</span>
                    </a>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-3 sm:space-x-4 text-lg">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="cursor-pointer hover:text-yellow-400 transition duration-300" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon className="cursor-pointer hover:text-yellow-400 transition duration-300" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon className="cursor-pointer hover:text-yellow-400 transition duration-300" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon className="cursor-pointer hover:text-yellow-400 transition duration-300" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Info;
