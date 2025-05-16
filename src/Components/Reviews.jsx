import React, { useState } from "react";
import { customerReviews } from "../Scripts/reviews";
import { FaQuoteLeft, FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Reviews() {
  const reviewsLength = customerReviews.length;
  const [reviewIndex, setReviewIndex] = useState(0);

  const backBtnClick = () => {
    setReviewIndex((prev) => (prev <= 0 ? reviewsLength - 1 : prev - 1));
  };

  const frontBtnClick = () => {
    setReviewIndex((prev) => (prev >= reviewsLength - 1 ? 0 : prev + 1));
  };

  const { name, location, message } = customerReviews[reviewIndex];

  return (
    <div
      className="bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF] px-8 py-16 flex justify-center items-center"
      id="reviews"
    >
      <div className="w-full max-w-5xl">
        <p className="text-gray-500 font-rubik text-2xl lg:text-3xl font-bold mb-4 tracking-wide">
          Trusted by <span className="text-[#178BFF]">1500+ Happy Clients</span>
        </p>

        <p className="text-black font-rubik text-3xl lg:text-4xl font-bold mb-6 leading-tight tracking-wide">
          Don’t take our word for it — see what our customers have to say!
        </p>

        <div className="relative my-16 flex items-center">
          <FaQuoteLeft className="absolute -top-6 -left-6 text-[#178BFF] text-4xl" />
          <p className="ml-10 mr-10 text-xl lg:text-2xl font-rubik text-black leading-relaxed tracking-wide">
            {message}
          </p>
          <FaQuoteRight className="absolute -bottom-6 -right-6 text-[#178BFF] text-4xl" />
        </div>

        <div className="flex justify-between items-center flex-wrap">
          <div className="ml-2">
            <p className="text-xl lg:text-2xl font-bold font-poppins">{name}</p>
            <p className="text-[#6F7074] text-base lg:text-lg font-bold font-rubik mt-1">
              {location}
            </p>
          </div>

          <div className="flex gap-4 mt-4 lg:mt-0">
            <button
              type="button"
              onClick={backBtnClick}
              className="text-4xl text-black hover:text-[#178BFF] transition-colors"
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              onClick={frontBtnClick}
              className="text-4xl text-black hover:text-[#178BFF] transition-colors"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
