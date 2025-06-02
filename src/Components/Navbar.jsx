import React, { useState } from "react";
import { FaCommentDots, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Our agents are currently busy. Please hold on.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center h-20 px-8">
        {/* Logo */}
        <h1 className="font-poppins text-2xl font-bold">
          <Link to="/" className="text-[#1A8EFD] no-underline tracking-wide">
            Bassi
            <span className="text-[#54de54] font-cambria text-2xl font-bold ml-1">
              & Dhesi services Ltd.
            </span>
          </Link>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8 font-rubik text-lg">
          <li>
            <a href='#home' className="text-black hover:text-[#0cc2ea] no-underline tracking-wide">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-black hover:text-[#0cc2ea] no-underline tracking-wide">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="text-black hover:text-[#0cc2ea] no-underline tracking-wide">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black hover:text-[#0cc2ea] no-underline tracking-wide">
              Contact
            </a>
          </li>
        </ul>

        {/* Request Button */}
       <Link to='/appointment'> <button
          onClick={handleChatBtnClick}
          disabled={isButtonDisabled}
          className="hidden lg:block cursor-pointer  bg-[#1A8EFD] hover:bg-white hover:text-[#1A8EFD] text-white border border-transparent hover:border-[#1A8EFD] transition-all duration-300 rounded-full px-5 py-2 font-rubik text-lg tracking-wide"
        >
          <FaCommentDots className="inline mr-2" /> Request Service
        </button> </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <FaBars className="w-6 h-6 cursor-pointer hover:text-[#0cc2ea]" onClick={toggleNav} />
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white flex flex-col items-center justify-center transform transition-transform duration-500 z-40 ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-7 right-7">
          <FaTimes
            className="w-6 h-6 cursor-pointer hover:text-red-500"
            onClick={toggleNav}
          />
        </div>
        <ul className="flex flex-col gap-6 text-2xl text-center font-poppins font-bold tracking-wide">
          <li>
            <Link to="/" onClick={toggleNav} className="text-black hover:text-[#0cc2ea]">
              Home
            </Link>
          </li>
          <li>
            <a href="#services" onClick={toggleNav} className="text-black hover:text-[#0cc2ea]">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleNav} className="text-black hover:text-[#0cc2ea]">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleNav} className="text-black hover:text-[#0cc2ea]">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleNav} className="text-black hover:text-[#0cc2ea]">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
