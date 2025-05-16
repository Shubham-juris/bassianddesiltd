import React from "react";

function InformationCard({ title, description, Icon }) {
  return (
    <div className="relative bg-white border-2 border-gray-300 rounded-xl p-6 pt-12 shadow-md">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-100 p-3 rounded-full">
        <Icon className="text-blue-500 text-2xl" />
      </div>
      <h4 className="text-xl font-bold font-poppins mt-4 mb-6">{title}</h4>
      <p className="text-gray-700 font-rubik text-base leading-7">{description}</p>
    </div>
  );
}

export default InformationCard;
