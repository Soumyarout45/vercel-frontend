import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";

const MyAppointments = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments
  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}api/user/appointments`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        console.log("Fetched Appointments:", data.appointments);
        setAppointments(data.appointments.reverse());
      } else {
        toast.error("Failed to load appointments");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    }
  };

  // Cancel appointment
  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}api/user/cancel-appointment`,
        { appointmentId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success(data.message);

        // Remove the cancelled appointment from the UI
        setAppointments((prev) =>
          prev.filter((item) => item._id !== appointmentId)
        );
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div className="p-6 sm:p-10 bg-gradient-to-br from-teal-50 to-blue-100 min-h-screen">
      <h2 className="text-3xl font-bold text-teal-700 mb-8 text-center">
        My Appointments
      </h2>

      <div className="space-y-8 max-w-5xl mx-auto">
        {appointments.length === 0 && (
          <p className="text-center text-gray-600">No appointments found.</p>
        )}

        {appointments.map((item, index) => {
          console.log("Rendering appointment:", item); // 🔍 Debug log

          return (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6 grid grid-cols-1 sm:grid-cols-[1fr_3fr_1fr] gap-6 hover:scale-[1.01] transition-transform duration-300"
            >
              {/* Doctor Image */}
              <img
                className="w-28 h-28 object-cover rounded-full shadow-md border-4 border-teal-100"
                src={item.docData?.image || "https://via.placeholder.com/100"}
                alt={item.docData?.name || "Doctor"}
              />

              {/* Doctor Info */}
              <div className="text-sm text-gray-700 space-y-2">
                <h3 className="text-xl font-semibold text-teal-800">
                  {item.docData?.name || "Doctor Name"}
                </h3>
                <p className="text-teal-600 italic">
                  {item.docData?.speciality || "Speciality"}
                </p>
                <div>
                  <p className="text-xs text-gray-600">Address:</p>
                  <p className="text-sm font-medium">
                    {item.docData?.address?.line1}
                  </p>
                  <p className="text-sm font-medium">
                    {item.docData?.address?.line2}
                  </p>
                </div>
                <div className="flex gap-4 items-center text-sm text-blue-700 mt-2">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    {item.slotDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {item.slotTime}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col justify-center items-start sm:items-end gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="min-w-[150px] bg-gradient-to-r from-green-400 to-teal-600 text-white text-sm font-semibold py-2 px-5 rounded-full shadow-md hover:from-green-500 hover:to-teal-700 transition-all"
                >
                  Pay Online
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => cancelAppointment(item._id)}
                  className="min-w-[150px] bg-red-100 text-red-700 border border-red-300 hover:bg-red-400 hover:text-white text-sm font-semibold py-2 px-5 rounded-full transition-all"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MyAppointments;
