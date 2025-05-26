import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 mt-20 px-6 md:px-20 py-10">
      <div className="flex flex-col md:grid grid-cols-[3fr_1fr_1fr] gap-10 text-sm">
        {/* Left */}
        <div className="max-w-md">
  <img className="w-36 h-36 mb-2" src={assets.logo} alt="IndMed Logo" />
  <p className="text-gray-700 text-[16px] leading-snug text-justify line-clamp-3">
    Book appointments with trusted doctors at your convenience using our Doctor Booking App. 
    Our platform simplifies the process, making healthcare accessible anytime, anywhere. 
    Experience seamless booking and personalized care with just a few taps.
  </p>
</div>


        {/* Middle */}
        <div>
          <p className="text-xl font-bold text-teal-600 mb-4">COMPANY</p>
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
           <li
  onClick={() => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}
  className="cursor-pointer"
>
  Home
</li>
<li
  onClick={() => {
    navigate('/about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}
  className="cursor-pointer"
>
  About us
</li>
<li
  onClick={() => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}
  className="cursor-pointer"
>
  Contact us
</li>

          </ul>
        </div>

        {/* Right */}
        <div>
          <p className="text-xl font-bold text-teal-600 mb-4">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-700 font-medium">
            <li>📞 +91 76******52</li>
            <li>📧 indmedico@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        <hr className="mb-4" />
        <p>
          © 2025 <span className="text-teal-600 font-medium">Soumya Ranjan</span> - All Rights Reserved. Made with ❤️
        </p>
      </div>
    </div>
  );
};

export default Footer;
