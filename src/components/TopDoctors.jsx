import React from "react";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const TopDoctors = () => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-4xl md:text-5xl font-semibold text-center text-teal-600 leading-tight mb-6 animate__animated animate__fadeInUp">
        Top Doctors to Book
      </h1>
      <p className="sm:w-2/3 md:w-1/2 mx-auto text-center text-base sm:text-lg text-gray-600 opacity-75 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
        Simply browse through our extensive list of trusted doctors and schedule
        your appointment hassle-free.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-20px] transition-all duration-500"
            key={index}
          >
            <img
              className="bg-gradient-to-b from bg-teal-600 to-black"
              src={item.image}
              alt=""
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 rounded-full bg-green-400"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="py-3 mt-6 px-6 bg-teal-500 text-white font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-blue-300 hover:ring-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full w-32"
      >
        more
      </button>
    </div>
  );
};

export default TopDoctors;
