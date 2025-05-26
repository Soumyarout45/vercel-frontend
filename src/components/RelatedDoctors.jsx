import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDoc.slice(0, 7).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 200); // slight delay to ensure the route changes first
            }}
            className="border border-blue-200 rounded-xl overflow-y-auto max-h-96 cursor-pointer hover:-translate-y-5 transition-all duration-500"
            key={index}
          >
            <img
              className="bg-gradient-to-b from bg-teal-600 to-black"
              src={item.image}
              alt=""
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-400 rounded-full"></p>
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
        className="py-3 mt-6 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-blue-300 hover:ring-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full w-32"
      >
        more
      </button>
    </div>
  );
};

export default RelatedDoctors;
