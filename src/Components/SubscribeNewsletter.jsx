import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubscribeNewsletter() {
  const [inputEmail, setInputEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleEmailInput = (event) => {
    setInputEmail(event.target.value);
  };

  const handleBookAppointmentClick = () => {
    if (!isButtonDisabled) {
      emailRegex.test(inputEmail)
        ? toast.success("Subscribed to Newsletter !", {
            position: toast.POSITION.TOP_CENTER,
            onOpen: () => {
              setIsButtonDisabled(true);
              setInputEmail("");
            },
            onClose: () => setIsButtonDisabled(false),
          })
        : toast.error("Invalid Email Address !", {
            position: toast.POSITION.TOP_CENTER,
            onOpen: () => setIsButtonDisabled(true),
            onClose: () => setIsButtonDisabled(false),
          });
    }
  };

  return (
    <div className="mt-6">
      <p className="text-white font-bold text-lg tracking-wide mb-4">
        Stay Update to our Newsletter
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <input
          type="email"
          className="w-full md:w-[300px] px-6 py-4 rounded-full bg-[#293241] text-white text-base font-medium placeholder-gray-400 outline-none"
          placeholder="Enter your email address"
          name="email"
          value={inputEmail}
          onChange={handleEmailInput}
          autoComplete="true"
        />

        <button
          type="button"
          disabled={isButtonDisabled}
          onClick={handleBookAppointmentClick}
          className={`px-6 py-3 rounded-full font-medium text-white tracking-wide transition-all duration-300 ${
            isButtonDisabled
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#1A8EFD] hover:bg-white hover:text-[#1A8EFD] border-2 border-transparent hover:border-[#1A8EFD]"
          }`}
        >
          Subscribe
        </button>
      </div>

      <ToastContainer autoClose={4000} limit={1} closeButton={false} />
    </div>
  );
}

export default SubscribeNewsletter;
