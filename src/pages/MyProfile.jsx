import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets.js";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);

  if (!userData) return <div className="text-center mt-20">Loading...</div>;

  const defaultImage = assets.default_profile_image || "/assets/default-user.jpg";

  const updateUserProfileData = async () => {
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("phone", userData.phone);
    formData.append("address", JSON.stringify(userData.address));
    formData.append("gender", userData.gender);
    formData.append("dob", userData.dob);
    if (image) formData.append("image", image);

    try {
      const { data } = await axios.post(backendUrl + "api/user/update-profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (data.success) {
        toast.success("Profile updated successfully!");
        loadUserProfileData();
        setIsEdit(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while updating the profile.");
    }
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 bg-teal-100 shadow-xl rounded-xl space-y-6 mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Profile Image and Name */}
      <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.01 }}>
        {isEdit ? (
          <label htmlFor="image">
            <div className="relative cursor-pointer">
              <motion.img
                className="w-36 rounded opacity-75"
                src={image ? URL.createObjectURL(image) : userData.image || defaultImage}
                alt="Preview"
                whileHover={{ scale: 1.05 }}
              />
              <img
                className="w-10 absolute bottom-12 right-12"
                src={assets.upload_icon}
                alt="Upload"
              />
            </div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        ) : (
          <motion.img
            src={userData.image || defaultImage}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-teal-600"
            whileHover={{ scale: 1.05 }}
          />
        )}

        <div className="flex-1">
          {isEdit ? (
            <input
              type="text"
              className="w-full border px-3 py-2 rounded-lg"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <motion.h2 className="text-2xl font-semibold">{userData.name}</motion.h2>
          )}
        </div>
      </motion.div>

      <hr />

      {/* Contact Info */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Contact Information</h3>
        <div className="space-y-3">
          <p>
            <span className="font-medium text-gray-600">Email ID:</span> {userData.email}
          </p>

          <p className="font-medium text-gray-600">Phone:</p>
          {isEdit ? (
            <input
              type="text"
              className="w-full border px-3 py-2 rounded-lg"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}

          <p className="font-medium text-gray-600">Address:</p>
          {isEdit ? (
            <div className="space-y-2">
              <input
                type="text"
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Enter Address Line 1"
                value={userData.address?.line1 || ""}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              <input
                type="text"
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Enter Address Line 2"
                value={userData.address?.line2 || ""}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </div>
          ) : (
            <p>
              {userData.address?.line1} <br />
              {userData.address?.line2}
            </p>
          )}
        </div>
      </motion.div>

      {/* Basic Info */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Basic Information</h3>
        <div className="space-y-3">
          <div>
            <p className="font-medium text-gray-600">Gender:</p>
            {isEdit ? (
              <select
                className="w-full border px-3 py-2 rounded-lg"
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>

          <div>
            <p className="font-medium text-gray-600">Birthday:</p>
            {isEdit ? (
              <input
                type="date"
                className="w-full border px-3 py-2 rounded-lg"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div className="text-right" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        {isEdit ? (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={updateUserProfileData}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition cursor-pointer"
          >
            Save Information
          </motion.button>
        ) : (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEdit(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg transition cursor-pointer"
          >
            Edit
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default MyProfile;
