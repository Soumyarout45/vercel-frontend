import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
const navigate=useNavigate()

  return (
    <div className="flex bg-gradient-to-r from to-teal-500  to  bg-black px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
      {/*--left side--*/}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className="py-3 mt-6 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-blue-300 hover:ring-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full">
          Create Account
        </button>
      </div>
      {/*--right side--*/}
      <div className="md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
