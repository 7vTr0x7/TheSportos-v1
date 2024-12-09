import React from "react";
import logo from "../images/logo.png";
import { IoIosArrowUp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import BackToTop from "./BackToTop";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#151515] pb-8 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 pt-12 pb-8 md:pb-14 gap-4">
        <div className="col-span-1 md:col-span-3 flex justify-center md:justify-start">
          <img alt="logo" src={logo} className="h-24 md:h-32" />
        </div>
        <div className="col-span-1 md:col-span-6 flex flex-col items-center md:items-center">
          <div className="flex gap-5 justify-center">
            <AiFillInstagram className="text-gray-50 text-2xl md:text-3xl" />
            <div className="h-5 md:h-6 w-[1px] bg-gray-600" />
            <FaFacebook className="text-gray-50 text-[20px] md:text-[25px]" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-lg font-semibold text-gray-100 mt-4 md:mt-16">
            <p>
              <Link to="/fixtures">Fixtures</Link>
            </p>
            <div className="h-5 md:h-6 w-[1px] bg-gray-600" />
            <p>
              <Link to="/players">Players</Link>
            </p>

            <div className="h-5 md:h-6 w-[1px] bg-gray-600" />
            <p>
              <Link to="/league">League</Link>
            </p>

            <div className="h-5 md:h-6 w-[1px] bg-gray-600" />

            <p>
              <Link to="/news">News</Link>
            </p>

            <div className="h-5 md:h-6 w-[1px] bg-gray-600" />
            <p className="whitespace-nowrap">
              <Link to="/contact-us"> Contact Us</Link>
            </p>
          </div>
        </div>
        <BackToTop />
      </div>

      <hr className="h-[1px] bg-gray-500 border-0 my-2 dark:bg-gray-50" />
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-4 space-y-2 md:space-y-0">
        <p>2024 &copy; thesprotos</p>
        <p>Privacy Policy | Terms of use</p>
      </div>
    </footer>
  );
};

export default Footer;
