import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF] px-6 py-10">
      {/* Title Section */}
      <h1 className="text-center text-4xl sm:text-5xl font-bold text-blue-500 font-poppins bg-white py-2 rounded">
        <Link to="/">
          Bhassi<span className="text-green-500 font-cambria text-5xl sm:text-6xl font-extrabold">&Dhesiservices</span>
        </Link>
      </h1>

      {/* Text Content */}
      <div className="mt-8 space-y-8 max-w-4xl mx-auto">
        <div>
          <p className="text-2xl sm:text-3xl font-bold border-b-2 border-gray-500 font-poppins mb-2">General Info</p>
          <p className="text-base sm:text-lg font-rubik leading-7 tracking-wide">
            Welcome to Clean&Build, your reliable partner in professional cleaning and construction services.
            We are committed to delivering high-quality home improvement, renovation, and cleaning solutions.
            By using our website, you agree to the policies and procedures outlined below.
          </p>
        </div>

        <div>
          <p className="text-2xl sm:text-3xl font-bold border-b-2 border-gray-500 font-poppins mb-2">Privacy Policy</p>
          <p className="text-base sm:text-lg font-rubik leading-7 tracking-wide">
            We take your privacy seriously. Our Privacy Policy describes how we collect, use, and store your personal information 
            (such as name, contact details, address, and project information). Your data will never be shared with third parties 
            without consent, and all communications are encrypted for your protection.
          </p>
        </div>

        <div>
          <p className="text-2xl sm:text-3xl font-bold border-b-2 border-gray-500 font-poppins mb-2">Terms of Service</p>
          <p className="text-base sm:text-lg font-rubik leading-7 tracking-wide">
            By scheduling a service or interacting with our team, you agree to follow the Terms of Service. This includes payment terms, 
            cancellation policies, and expectations around safety and job site access. Both clients and service providers must communicate 
            clearly to ensure a successful outcome.
          </p>
        </div>

        <div>
          <p className="text-2xl sm:text-3xl font-bold border-b-2 border-gray-500 font-poppins mb-2">Service Bookings</p>
          <p className="text-base sm:text-lg font-rubik leading-7 tracking-wide">
            When booking a cleaning or construction service, please provide accurate information about the scope of work. 
            Our team will review your request and confirm availability. Quotes are based on job complexity, materials, and required labor. 
            Final costs may vary based on site conditions.
          </p>
        </div>

        <div>
          <p className="text-2xl sm:text-3xl font-bold border-b-2 border-gray-500 font-poppins mb-2">How it Works</p>
          <p className="text-base sm:text-lg font-rubik leading-7 tracking-wide">
            Select your desired service (cleaning, renovation, or maintenance), choose a preferred date, and complete our brief booking form. 
            A project coordinator will contact you to confirm details and dispatch the appropriate team. For ongoing or large-scale projects, 
            we provide regular progress updates and site supervision.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-black font-bold text-lg sm:text-xl font-rubik tracking-wide px-4">
        © 2013-2025 Clean&Build. All rights reserved.
      </footer>
    </div>
  );
}

export default LegalDocs;
