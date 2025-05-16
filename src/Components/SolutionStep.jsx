import React from "react";

function SolutionStep({ title, description, Icon }) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <div className="mt-1 text-[#9D2553]">
        <Icon className="text-xl" />
      </div>
      <div>
        <h5 className="text-lg font-semibold font-rubik tracking-wide">{title}</h5>
        <p className="text-gray-700 font-rubik leading-relaxed tracking-wide mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}

export default SolutionStep;
