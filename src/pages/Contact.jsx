import React from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    toast.success("Query Sent ✉️", {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

    // Optionally: reset form inputs here if needed
    e.target.reset();
  };

  return (
    <div
      className="bg-gradient-to-r from-teal-500 to-indigo-600 py-12 px-6 md:px-16"
      id="contact"
    >
      <ToastContainer />
      {/* Section Title */}
      <motion.div
        className="text-center mb-10 text-white"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <p className="text-4xl font-bold tracking-wide">
          CONTACT <span className="text-teal-200">US</span>
        </p>
        <p className="text-teal-100 mt-2 text-lg">
          We’re here to help — get in touch with us!
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <motion.div
          className="space-y-6 md:space-y-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              required
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
            ></textarea>
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Address + Google Map */}
        <motion.div
          className="space-y-6 text-white"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <div>
            <h3 className="text-xl font-semibold text-teal-200">
              IndMed Office
            </h3>
            <p className="text-teal-100">
              123 Health Street, <br />
              New Delhi, India <br />
              Phone: +91-9876543210 <br />
              Email: contact@indmed.com
            </p>
          </div>

          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <iframe
              title="IndMed Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.666405194296!2d77.2167213!3d28.6448001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c12a0f7df7%3A0xa234a1689f8ef7a9!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1612948278873!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
