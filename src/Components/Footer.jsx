import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter
} from "react-icons/fa6";
import SubscribeNewsletter from "./SubscribeNewsletter";

function Footer() {
  return (
    <div className="bg-[#1B2433]">
      <div className="px-10 py-10 flex flex-wrap justify-between items-start gap-4 text-white border-b-2 border-[#293241] rounded-sm">
        <div className="max-w-xl">
          <p className="text-[#1A8EFD] text-3xl font-bold font-poppins">
            Bassi <span className="text-[#1ECAB0]">&</span> Dhesi Services Ltd.
          </p>
          <p className="mt-4 mb-10 text-[#D0D3DA] text-lg leading-7 font-rubik">
            Professional cleaning and construction services tailored for your residential and commercial needs. From post-construction cleanups to full-scale renovations, we deliver quality, safety, and satisfaction.
          </p>
          <SubscribeNewsletter />
        </div>

        <div>
          <p className="text-xl font-bold font-rubik mb-4">Our Services</p>
          <ul className="space-y-4 font-bold text-sm text-[#a5a7ac]">
            {[
              "Post-Construction Cleaning",
              "General Contracting",
              "Interior Renovation",
              "Commercial Cleaning",
              "Move-In/Move-Out Cleaning"
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#services" className="hover:border-b-2 border-dotted border-[#a5a7ac]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xl font-bold font-rubik mb-4">Legal</p>
          <ul className="space-y-4 font-bold text-sm text-[#a5a7ac]">
            {[
              "About Us",
              "Privacy Policy",
              "Terms of Service",
              "Service Guarantee",
              "FAQs"
            ].map((item, idx) => (
              <li key={idx}>
                <Link to="/legal" className="hover:border-b-2 border-dotted border-[#a5a7ac]">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="contact">
          <p className="text-xl font-bold font-rubik mb-4">Contact Us</p>
          <ul className="space-y-4 font-bold text-sm text-[#a5a7ac]">
            <li>
              <a href="mailto:info@bassidhesiservices.com" className="hover:border-b-2 border-dotted border-[#a5a7ac]">
                info@bassidhesiservices.com
              </a>
            </li>
            <li>
              <a href="tel:+16043334455" className="hover:border-b-2 border-dotted border-[#a5a7ac]">
                +1 (604) 333-4455
              </a>
            </li>
            <li>
              <a href="tel:+16043336677" className="hover:border-b-2 border-dotted border-[#a5a7ac]">
                +1 (604) 333-6677
              </a>
            </li>
            <li>184 Falshire Close NE, Calgary, Alberta T3J 2Z9</li>
          </ul>

          <div className="mt-4 rounded-xl overflow-hidden">
            <iframe
              title="Bassi & Dhesi Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.094113372165!2d-113.93621562342472!3d51.09605604380174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537165a7e05b2365%3A0x9d91be77e3939e3f!2s184%20Falshire%20Close%20NE%2C%20Calgary%2C%20AB%20T3J%202Z9%2C%20Canada!5e0!3m2!1sen!2sus!4v1715144219153!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="px-10 py-6 flex flex-col md:flex-row justify-between items-center text-[#cbcdd3] font-rubik text-sm font-bold">
        <p>© {new Date().getFullYear()} Bassi & Dhesi Services. All rights reserved.</p>

        <ul className="flex gap-4 mt-4 md:mt-0">
          <li>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center border-2 border-[#cbcdd3] rounded-full hover:border-[#1A8EFD]">
{/*               <FaLinkedinIn className="text-[#cbcdd3] hover:text-[#1A8EFD]" /> */}
            </a>
          </li>
          <li>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center border-2 border-[#cbcdd3] rounded-full hover:border-[#1A8EFD]">
{/*               <FaFacebookF className="text-[#cbcdd3] hover:text-[#1A8EFD]" /> */}
            </a>
          </li>
          <li>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center border-2 border-[#cbcdd3] rounded-full hover:border-[#1A8EFD]">
{/*               <FaXTwitter className="text-[#cbcdd3] hover:text-[#1A8EFD]" /> */}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
