import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken,userData } = useContext(AppContext);

  const handleNavClick = (path) => {
    navigate(path);
    setShowMenu(false); // Close mobile menu on link click
  };

  return (
    <div
      className="flex items-center justify-between text-[18px] py-4 px-4 mb-5 border-b border-b-gray-400 bg-white relative z-50"
      style={{ maxHeight: "80px" }}
    >
      {/* Logo */}
      <img
        onClick={() => handleNavClick("/")}
        src={assets.logo}
        alt="Logo"
        className="w-44 cursor-pointer"
      />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-start gap-7 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-gradient-to-r from-teal-500 to-black rounded-lg"
              : "font-bold text-teal-600"
          }
        >
          <li className="py-1 px-6 rounded-full">HOME</li>
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-gradient-to-r from-teal-500 to-black rounded-lg"
              : "font-bold text-teal-600"
          }
        >
          <li className="py-1 px-6 rounded-full">ALL DOCTORS</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-gradient-to-r from-teal-500 to-black rounded-lg"
              : "font-bold text-teal-600"
          }
        >
          <li className="py-1 px-6 rounded-full">ABOUT</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-gradient-to-r from-teal-500 to-black rounded-lg"
              : "font-bold text-teal-600"
          }
        >
          <li className="py-1 px-6 rounded-full">CONTACT</li>
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {token && userData? (
          <div className="hidden md:flex items-center gap-2 cursor-pointer relative group">
            {/* Trigger Section */}
            <div className="flex items-center gap-2">
              <img
                src={userData.image}
                alt=""
                className="w-8 rounded-full"
              />
              <img src={assets.dropdown_icon} alt="" className="w-2.5" />
            </div>

            {/* Dropdown Section */}
            <div className="absolute top-10 right-0 pt-2 text-base font-medium text-white z-20 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
              <div className="min-w-48 bg-teal-600 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => {
                    setToken(false);
                    localStorage.removeItem("authToken");
                    navigate("/login"); // optional redirect
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 font-light hidden md:block cursor-pointer"
          >
            Create Account
          </button>
        )}

        {/* Hamburger Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="menu"
        />
      </div>

      {/* -------- Mobile Menu -------- */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-teal-500 text-white z-50 transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white">
          <img src={assets.logo} alt="Logo" className="w-32" />
          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt="Close"
            className="w-6 cursor-pointer"
          />
        </div>
        <ul className="flex flex-col gap-6 p-6 font-semibold">
          <li onClick={() => handleNavClick("/")}>Home</li>
          <li onClick={() => handleNavClick("/doctors")}>All Doctors</li>
          <li onClick={() => handleNavClick("/about")}>About</li>
          <li onClick={() => handleNavClick("/contact")}>Contact</li>

          {token ? (
            <>
              <hr className="border-white my-2" />
              <li onClick={() => handleNavClick("/my-profile")}>My Profile</li>
              <li onClick={() => handleNavClick("/my-appointments")}>
                My Appointments
              </li>
              <li onClick={() => setToken(false)}>Logout</li>
            </>
          ) : (
            <button
              onClick={() => handleNavClick("/login")}
              className="bg-white text-teal-600 px-4 py-2 rounded-full font-semibold"
            >
              Create Account
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
