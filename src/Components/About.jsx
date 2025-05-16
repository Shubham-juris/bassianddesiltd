import React from "react";
import Workers from "../Assets/swqqq1.webp";
import SolutionStep from "./SolutionStep";
import { FaClipboardCheck, FaCalendarAlt, FaTools } from "react-icons/fa";

function About() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center gap-6 px-8 py-16 bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]"
      id="about"
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 text-center">
        <img
          src={Workers}
          alt="Construction Team"
          className="w-4/5 h-auto mx-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-4xl font-bold font-poppins mb-6 relative inline-block">
          <span className="relative after:content-[''] after:absolute after:w-3/4 after:h-1 after:bg-[#9D2553] after:rounded-md after:left-0 after:-bottom-3">
            About Us
          </span>
        </h3>

        <p className="text-gray-700 font-rubik text-lg tracking-wide leading-7 my-8">
          Welcome to Bhassi & Dhesi Services — your go-to team for reliable cleaning
          and construction solutions. With a strong foundation in community values and
          hands-on experience, we deliver professional results with a personal touch.
          From spotless homes to robust renovations, we build trust while we build your space.
        </p>

        <h4 className="text-2xl font-bold font-poppins text-gray-700 mb-6">How We Work</h4>

        <SolutionStep
          Icon={FaClipboardCheck}
          title="Request a Service"
          description="Tell us what you need — whether it’s cleaning, renovation, or repairs — and we’ll take care of the rest."
        />

        <SolutionStep
          Icon={FaCalendarAlt}
          title="Schedule a Visit"
          description="Pick a time that works for you. Our friendly and skilled team will arrive promptly, fully prepared."
        />

        <SolutionStep
          Icon={FaTools}
          title="Get the Job Done"
          description="We work efficiently and respectfully, delivering high-quality results that meet your standards and budget."
        />
      </div>
    </div>
  );
}

export default About;
