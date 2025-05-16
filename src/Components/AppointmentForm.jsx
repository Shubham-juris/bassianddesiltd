import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaUser, FaPhone, FaTools, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [serviceType, setServiceType] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [location, setLocation] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!clientName.trim()) {
      errors.clientName = "Full name is required";
    } else if (clientName.trim().length < 5) {
      errors.clientName = "Full name must be at least 5 characters";
    }

    if (!clientPhone.trim()) {
      errors.clientPhone = "Phone number is required";
    } else if (clientPhone.trim().length !== 10) {
      errors.clientPhone = "Phone number must be 10 digits";
    }

    if (serviceType === "default") {
      errors.serviceType = "Please select a service";
    }

    if (!appointmentTime) {
      errors.appointmentTime = "Preferred date and time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please choose a future time";
      }
    }

    if (!location.trim()) {
      errors.location = "Service location is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setClientName("");
    setClientPhone("");
    setServiceType("default");
    setAppointmentTime("");
    setLocation("");
    setFormErrors({});

    toast.success("Service Request Submitted!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        <Link to="/">
          Bhassi <span className="text-teal-500">&</span> Dhesi Services
        </Link>
      </h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Request a Service
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              <div className="flex items-center">
                <FaUser className="mr-2 text-blue-500" />
                Full Name
              </div>
            </label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {formErrors.clientName && <p className="text-red-500 text-sm mt-1">{formErrors.clientName}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              <div className="flex items-center">
                <FaPhone className="mr-2 text-blue-500" />
                Phone Number
              </div>
            </label>
            <input
              type="text"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {formErrors.clientPhone && <p className="text-red-500 text-sm mt-1">{formErrors.clientPhone}</p>}
          </div>

          {/* Type of Service */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              <div className="flex items-center">
                <FaTools className="mr-2 text-blue-500" />
                Type of Service
              </div>
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="default">Select</option>
              <option value="cleaning">Post-Construction Cleaning</option>
              <option value="renovation">Interior Renovation</option>
              <option value="general">General Contracting</option>
              <option value="commercial">Commercial Cleaning</option>
              <option value="other">Other</option>
            </select>
            {formErrors.serviceType && <p className="text-red-500 text-sm mt-1">{formErrors.serviceType}</p>}
          </div>

          {/* Preferred Date & Time */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-blue-500" />
                Preferred Date & Time
              </div>
            </label>
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {formErrors.appointmentTime && <p className="text-red-500 text-sm mt-1">{formErrors.appointmentTime}</p>}
          </div>

          {/* Service Location */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                Service Location
              </div>
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {formErrors.location && <p className="text-red-500 text-sm mt-1">{formErrors.location}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit Request
          </button>

          {/* Success Message */}
          {isSubmitted && (
            <p className="text-green-600 text-center mt-4">
              Your service request has been received. We'll contact you shortly!
            </p>
          )}
        </form>
      </div>

      <footer className="text-center text-gray-600 mt-8">
        © {new Date().getFullYear()} Bhassi & Dhesi Services. All rights reserved.
      </footer>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
