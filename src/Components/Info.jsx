import React from "react";
import InformationCard from "./InformationCard";
import { FaBroom, FaHammer, FaPeopleCarry } from "react-icons/fa";

function Info() {
  return (
    <div className="bg-white text-center px-8 py-16" id="services">
      <div className="max-w-4xl mx-auto mb-28">
        <h3 className="text-4xl font-bold font-poppins mb-6 relative inline-block">
          <span className="relative after:content-[''] after:absolute after:w-3/4 after:h-1 after:bg-[#9D2553] after:rounded-md after:left-0 after:-bottom-3">
            Our Services
          </span>
        </h3>
        <p className="text-gray-700 font-rubik text-lg leading-8 tracking-wide mx-4 md:mx-20">
          At Bhassi & Dhesi Services, we specialize in reliable cleaning and construction solutions.
          From everyday cleaning to complex renovations, we bring quality, trust, and a personal touch to every project.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <InformationCard
          title="Residential & Commercial Cleaning"
          description="Our expert team ensures your spaces are spotless and hygienic. Whether it’s home, office, or retail, we use eco-friendly methods to deliver top-tier cleaning tailored to your needs."
          Icon={FaBroom}
        />
        <InformationCard
          title="Renovation & Repairs"
          description="Need a kitchen makeover or structural repair? We provide skilled construction and renovation services that breathe new life into your property with precision and professionalism."
          Icon={FaHammer}
        />
        <InformationCard
          title="Post-Construction Cleanup"
          description="After the build, we handle the mess. Our post-construction cleaning service removes debris, dust, and leftover materials, making your newly completed space ready to use."
          Icon={FaPeopleCarry}
        />
      </div>
    </div>
  );
}

export default Info;
