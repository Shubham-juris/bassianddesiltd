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
    <div className="px-8 py-8 bg-gradient-to-r from-blue-50 to-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="w-full lg:w-3/5 px-0 lg:px-8">
          <p className="mb-3 text-gray-700 font-rubik font-bold text-xl tracking-wide">
            🛠️ Clean & Build with Trust
          </p>
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-black max-w-xl leading-tight">
            Professional Cleaning & Construction Services
          </h2>
          <p className="text-gray-700 font-rubik text-lg tracking-wide leading-relaxed max-w-lg my-8">
            Offering Bhassi and Dhesi-style cleaning, repairs, remodeling, and
            post-construction cleaning with a personal touch. Reliable and
            community-driven service you can trust.
          </p>
          <button
            onClick={handleRequestServiceClick}
            className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-rubik tracking-wide hover:bg-transparent hover:text-blue-600 border border-transparent hover:border-blue-600 transition-colors duration-400 flex items-center"
            type="button"
          >
            <FaCalendarCheck className="mr-2" />
            Request a Service
          </button>

          <div className="mt-10 flex gap-12">
            <div className="text-center">
              <p className="text-blue-600 font-rubik font-bold text-3xl mb-2">
                300+
              </p>
              <p className="text-gray-700 font-poppins text-lg">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-blue-600 font-rubik font-bold text-3xl mb-2">100+</p>
              <p className="text-gray-700 font-poppins text-lg">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <p className="text-blue-600 font-rubik font-bold text-3xl mb-2">15+</p>
              <p className="text-gray-700 font-poppins text-lg">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-2/5 hidden lg:block text-center">
          <img
            src={WorkerImage}
            alt="Construction Worker"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Scroll Up Button */}
      <div
        onClick={scrollToTop}
        className={`fixed bottom-12 right-12 w-11 h-11 rounded-full border-4 border-white bg-blue-600 text-white flex items-center justify-center text-2xl cursor-pointer transition-opacity ${
          goUp ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <FaAngleUp />
      </div>
    </div>
  );
}

export default Hero;
    