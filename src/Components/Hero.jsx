import React, { useEffect, useState } from "react";
import WorkerImage from "../Assets/sweeper.webp";
import { FaCalendarCheck, FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRequestServiceClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      setGoUp(window.scrollY > 600);
    };
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div id='home' className="px-4 md:px-8 py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="w-full lg:w-3/5">
          <p className="mb-3 text-gray-700 font-rubik font-semibold text-lg sm:text-xl">
            🛠️ Clean & Build with Trust
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-black max-w-xl leading-tight">
            Professional Cleaning & Construction Services
          </h2>
          <p className="text-gray-700 font-rubik text-base sm:text-lg tracking-wide leading-relaxed max-w-lg my-6 sm:my-8">
            Offering Bhassi and Dhesi-style cleaning, repairs, remodeling, and
            post-construction cleaning with a personal touch. Reliable and
            community-driven service you can trust.
          </p>
          <button
            onClick={handleRequestServiceClick}
            className="px-5 py-3 bg-blue-600 text-white rounded-full text-base sm:text-lg font-rubik tracking-wide hover:bg-transparent hover:text-blue-600 border border-transparent hover:border-blue-600 transition-colors duration-400 flex items-center"
            type="button"
          >
            <FaCalendarCheck className="mr-2" />
            Request a Service
          </button>

          {/* Metrics */}
          <div className="mt-10 flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div className="text-center">
              <p className="text-blue-600 font-rubik font-bold text-3xl mb-1">300+</p>
              <p className="text-gray-700 font-poppins text-base">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-blue-600 font-rubik font-bold text-3xl mb-1">100+</p>
              <p className="text-gray-700 font-poppins text-base">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <p className="text-blue-600 font-rubik font-bold text-3xl mb-1">15+</p>
              <p className="text-gray-700 font-poppins text-base">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-2/5 text-center">
          <img
            src={WorkerImage}
            alt="Construction Worker"
            className="w-full max-w-xs sm:max-w-md lg:max-w-full h-auto mx-auto"
          />
        </div>
      </div>

      {/* Scroll Up Button */}
      <div
        onClick={scrollToTop}
        className={`fixed bottom-6 z-10 right-6 sm:bottom-10 sm:right-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full border-4 border-white bg-blue-600 text-white flex items-center justify-center text-xl sm:text-2xl cursor-pointer transition-opacity ${
          goUp ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <FaAngleUp />
      </div>
    </div>
  );
}

export default Hero;
