import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // for animation
import { assets } from "../assets/assets";

const About = () => {
  const images = [
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1710698936989-500f359c6482?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1711343777918-6d395c16e37f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1613377512409-59c33c10c821?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-6 md:px-20 py-10 bg-gradient-to-br from-white via-teal-200 to-purple-150 shadow-lg">
      {/* Heading */}
      <div className="text-center text-3xl font-semibold text-gray-700 mb-10">
        <p className="text-3xl font-bold text-teal-600">
          ABOUT <span className="text-gray-800">US</span>
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Image */}
        <img
          className="w-full md:max-w-[400px] rounded-xl shadow-md"
          src={images[currentImage]}
          alt="About IndMed"
        />

        {/* Animated Text Section */}
        <div className="text-gray-700 space-y-4 text-justify leading-relaxed">
          <motion.p
            className="text-gray-700 text-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Welcome to <span className="font-semibold text-indigo-600">IndMed</span>, your
            trusted partner in managing your healthcare needs conveniently and
            efficiently. At IndMed, we understand the challenges individuals
            face when it comes to scheduling doctor appointments and managing
            their health records.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            IndMed is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, IndMed is here to support you every step of the way.
          </motion.p>

          <motion.p
            className="font-bold text-lg text-indigo-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Our Vision
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Our vision at IndMed is to create a seamless healthcare experience
            for every user. We aim to bridge the gap between patients and
            healthcare providers, making it easier for you to access the care
            you need, when you need it.
          </motion.p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <motion.div
        className="text-center text-2xl font-semibold my-10 text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
      >
        WHY <span className="text-teal-600 font-semibold">CHOOSE US?</span>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 mb-20">
        {[
          {
            title: "Efficiency",
            text: "Streamlined appointment scheduling that fits into your busy lifestyle.",
            delay: 2.2,
          },
          {
            title: "Convenience",
            text: "Access to a network of trusted healthcare professionals in your area.",
            delay: 2.4,
          },
          {
            title: "Personalization",
            text: "Tailored recommendations and reminders to help you stay on top of your health.",
            delay: 2.6,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gradient-to-br from-red-950 to-blue-950 hover:text-white transition-all duration-300 text-gray-950 cursor-pointer rounded-lg shadow-md hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: item.delay }}
          >
            <b>{item.title}:</b>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
