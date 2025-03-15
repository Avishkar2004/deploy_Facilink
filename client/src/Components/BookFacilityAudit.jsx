import React, { useRef } from "react";
import HomeBanner from "../assets/Header/home-banner.jpg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/ReactToastify.css"

const BookFacilityAudit = () => {
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault(); // Prevents form from refreshing the page
    emailjs
      .sendForm("service_xlger18", "template_814ax4b", form.current, "yY8zQZu3z-_tvMwU5")
      .then(
        (res) => {
          toast.success("🎉 Your request has been submitted successfully", { position: "top-center", autoClose: 2000 })
          form.current.reset(); // Reset form fields
        },
        (err) => {
          console.log("Failed to send email", err);
        }
      );
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-white h-auto lg:h-[55vh]">
      <ToastContainer />
      {/* Background Image */}
      <div className="w-full sm:h-auto lg:h-full">
        <img
          src={HomeBanner}
          alt="Home Banner"
          className="w-full h-[15vh] py-1 sm:h-[50vh] lg:h-full object-cover object-center rounded-b-lg shadow-md"
        />
      </div>
      {/* Form Overlay */}
      <div className="relative bg-[#bcbec1] text-white p-4 sm:p-6 md:p-7 shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 max-w-sm mx-auto mt-5 mb-5 sm:mt-8 lg:absolute lg:top-[40%] lg:transform lg:-translate-y-1/2 lg:right-12 rounded-lg">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-black text-center uppercase">
          BOOK A FREE FACILITY AUDIT
        </h2>
        <form ref={form} onSubmit={sendMail} className="space-y-3 sm:space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="NAME*"
            required
            className="w-full p-2 border border-gray-400 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="WORK EMAIL*"
            required
            className="w-full p-2 border border-gray-400 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="number"
            name="user_mobile"
            placeholder="CONTACT NUMBER*"
            required
            className="w-full p-2 border border-gray-400 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            name="user_organization"
            placeholder="ORGANIZATION NAME*"
            required
            className="w-full p-2 border border-gray-400 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#73767c] text-black font-semibold p-2 rounded-md shadow-md hover:bg-[#5c5f65] transition-all duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookFacilityAudit;
