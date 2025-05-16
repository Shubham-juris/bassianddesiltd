import React from "react";
import Workers from "../Assets/sweeper.webp";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaCalendarCheck } from "react-icons/fa";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 px-8 py-16 bg-white">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 text-center">
        <img
          src={Workers}
          alt="Construction & Cleaning Crew"
          className="w-4/5 h-auto mx-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-4xl font-bold font-poppins relative inline-block mb-6">
          <span className="relative after:content-[''] after:absolute after:w-3/4 after:h-1 after:bg-[#9D2553] after:rounded-md after:left-0 after:-bottom-3">
            Why Choose Us
          </span>
        </h3>

        <p className="text-gray-700 font-rubik text-lg tracking-wide leading-8 my-8">
          Bhassi & Dhesi Services offers dependable cleaning and construction solutions
          designed around your schedule and standards. From daily cleaning to major renovations,
          our skilled team delivers quality results with professionalism and care.
        </p>

        <div className="text-lg font-bold font-rubik tracking-wide space-y-6 mt-10 mb-10 text-gray-800">
          <p className="flex items-center gap-3">
            <FaCheckCircle className="text-[#1E8FFD]" /> Experienced & Trained Professionals
          </p>
          <p className="flex items-center gap-3">
            <FaCheckCircle className="text-[#1E8FFD]" /> Reliable and On-Time Service
          </p>
          <p className="flex items-center gap-3">
            <FaCheckCircle className="text-[#1E8FFD]" /> Affordable Pricing & Free Estimates
          </p>
          <p className="flex items-center gap-3">
            <FaCheckCircle className="text-[#1E8FFD]" /> Flexible Scheduling
          </p>
        </div>

        <button
          type="button"
          onClick={handleBookAppointmentClick}
          className="flex items-center gap-2 px-6 py-4 bg-[#1A8EFD] text-white rounded-full text-lg font-rubik tracking-wide transition-all duration-300 hover:bg-transparent hover:text-[#1A8EFD] border border-[#1A8EFD]"
        >
          <FaCalendarCheck />
          Schedule a Service
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
