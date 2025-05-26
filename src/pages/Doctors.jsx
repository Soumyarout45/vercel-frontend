import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);

  const applyFilter = () => {
    try {
      if (speciality) {
        setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
      } else {
        setFilterDoc(doctors);
      }
    } catch (err) {
      setError("Failed to filter doctors.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="text-center">
        <h1 className="text-xl md:text-2xl font-semibold text-zinc-800 tracking-wide border-b-4 border-teal-400 inline-block pb-2">
          Browse through the doctors specialist
        </h1>
      </div>

      {/* Filters Button */}
      <button
        className={`py-2 px-4 border rounded text-sm transition-all duration-300 ease-in-out sm:hidden ${
          showFilter
            ? "bg-teal-600 text-white border-teal-600"
            : "bg-transparent text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white"
        }`}
        onClick={() => setShowFilter((prev) => !prev)}
      >
        Filters
      </button>

      {/* Mobile Filter Dropdown (Initially Hidden) */}
      <div
        className={`${
          showFilter ? "block" : "hidden"
        } sm:hidden flex flex-col gap-3 mt-3 bg-teal-50 p-5 border border-teal-600 rounded-lg`}
      >
        <div className="flex flex-col gap-3">
          {[
            "General physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
          ].map((item, index) => (
            <p
              key={index}
              onClick={() =>
                speciality === item
                  ? navigate("/doctors")
                  : navigate(`/doctors/${item}`)
              }
              className={`w-full px-5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer
            ${
              speciality === item
                ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300"
            } 
            hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 hover:text-purple-800 hover:shadow`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Animated Doctor List */}
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {filterDoc.map((item, index) => (
          <motion.div
            key={item._id}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-20px] transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15, // staggered animation
            }}
          >
            <img
              className="bg-teal-600"
              src={item.image || "default-image-path.jpg"}
              alt={`${item.name}'s photo`}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-400 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
