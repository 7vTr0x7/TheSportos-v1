import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import logo from "../../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../app/slices/searchSlice";

const SearchNav = () => {
  const [searchedText, setSearchedText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const debounceTimeout = useRef(null);

  useEffect(() => {
    if (searchedText.trim() === "") {
      dispatch(setSearch(searchedText));
      return;
    }

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      dispatch(setSearch(searchedText));
    }, 300);

    return () => {
      clearTimeout(debounceTimeout.current);
    };
  }, [searchedText, dispatch]);

  return (
    <header
      id="top"
      className="bg-[#151515] text-[#bcbcbc] shadow-md py-3 px-4 md:pr-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <img
            src={logo}
            alt="logo"
            className="md:h-16 h-14 px-6 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="bg-[#222222] flex justify-center px-4 py-2 md:mt-0 mt-3 rounded-lg gap-2 items-center w-full md:w-4/12 mx-auto">
          <CiSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search league, clubs, news"
            value={searchedText}
            onChange={(e) => setSearchedText(e.target.value)}
            className="bg-transparent focus:outline-none text-base w-full placeholder-gray-400"
          />
        </div>
      </div>
    </header>
  );
};

export default SearchNav;
