import React from "react";
import { motion } from "framer-motion";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";
const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800 "
    >
      <h1 className="text-3xl md:text-4xl font-semibold text-zinc-800 tracking-wide border-b-4 border-teal-400 inline-block pb-2">
        Find by Speciality
      </h1>{" "}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="sm:w-1/3 text-center text-sm text-gray-600 leading-relaxed"
      >
        Discover top-rated doctors at your fingertips.{" "}
        <br className="hidden sm:block" />
        Book appointments effortlessly, anytime, anywhere.
      </motion.p>
      <div className="flex sm:justify-center gap-6 pt-5 w-full overflow-scroll ">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img
              className="w-16 sm:w-24 mb-4 rounded-full border-4 border-teal-500 shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl"
              src={item.image}
              alt="Doctor's profile"
            />{" "}
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
