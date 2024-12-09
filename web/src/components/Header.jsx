import React, { useState } from "react";
import logo from "../images/logo.png";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-[#151515] text-[#bcbcbc] shadow-md py-3 px-4 md:pr-10">
      <div className="flex justify-between items-center">
        <img
          src={logo}
          alt="logo"
          className="md:h-16 h-14 px-6 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="md:hidden text-2xl text-gray-400">
          {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>

        <nav className="hidden md:flex items-center gap-16">
          <ul className="flex gap-8 font-semibold text-gray-400 text-lg cursor-pointer">
            <li
              className={`${
                isActive("/") ? "text-gray-50" : ""
              } hover:text-white`}
              onClick={() => navigate("/")}>
              Home
            </li>
            <li
              className={`${
                isActive("/fixtures") ? "text-gray-50" : ""
              } hover:text-white`}
              onClick={() => navigate("/fixtures")}>
              Fixtures
            </li>
            <li
              className={`${
                isActive("/players") ? "text-gray-50" : ""
              } hover:text-white`}
              onClick={() => navigate("/players")}>
              Players
            </li>
            <li
              className={`${
                isActive("/league") ? "text-gray-50" : ""
              } hover:text-white`}
              onClick={() => navigate("/league")}>
              League
            </li>
            <li
              className={`${
                isActive("/news") ? "text-gray-50" : ""
              } hover:text-white`}
              onClick={() => navigate("/news")}>
              News
            </li>
            <li
              className={`${
                isActive("/contact-us") ? "text-gray-50" : ""
              } hover:text-white`}
              onClick={() => navigate("/contact-us")}>
              Contact Us
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <div
            className="bg-[#222222] px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/search")}>
            <CiSearch className="text-gray-400 text-xl" />
            <span className="text-gray-400 text-sm md:text-base lg:text-lg">
              Search league, clubs, news
            </span>
          </div>
        </div>
      </div>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } mt-4 md:hidden w-full flex flex-col px-8 items-start gap-4`}>
        <ul className="flex flex-col gap-4 cursor-pointer font-semibold text-gray-400 text-sm w-full">
          <li
            className={`${
              isActive("/") ? "text-gray-50" : ""
            } hover:text-white`}
            onClick={() => navigate("/")}>
            Home
          </li>
          <li
            className={`${
              isActive("/fixtures") ? "text-gray-50" : ""
            } hover:text-white`}
            onClick={() => navigate("/fixtures")}>
            Fixtures
          </li>
          <li
            className={`${
              isActive("/players") ? "text-gray-50" : ""
            } hover:text-white`}
            onClick={() => navigate("/players")}>
            Players
          </li>
          <li
            className={`${
              isActive("/league") ? "text-gray-50" : ""
            } hover:text-white`}
            onClick={() => navigate("/league")}>
            League
          </li>
          <li
            className={`${
              isActive("/news") ? "text-gray-50" : ""
            } hover:text-white`}
            onClick={() => navigate("/news")}>
            News
          </li>
          <li
            className={`${
              isActive("/contact-us") ? "text-gray-50" : ""
            } hover:text-white`}
            onClick={() => navigate("/contact-us")}>
            Contact Us
          </li>
        </ul>

        <div
          className="bg-[#222222] px-4 py-2 rounded-lg flex gap-2 items-center w-full cursor-pointer"
          onClick={() => navigate("/search")}>
          <CiSearch className="text-gray-400 text-lg" />
          <span className="text-gray-400">Search league, clubs, news</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
