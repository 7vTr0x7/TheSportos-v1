import React from "react";
import { IoIosArrowUp } from "react-icons/io"; // Make sure you have react-icons installed

const BackToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="col-span-1 md:col-span-3 flex justify-center md:justify-end gap-2 md:gap-3 text-gray-400 mt-4 md:mt-0 cursor-pointer"
      onClick={handleClick}>
      <p className="font-semibold text-sm md:text-xl whitespace-nowrap">
        Back to the top
      </p>
      <IoIosArrowUp className="text-lg md:mt-1 md:text-xl" />
    </div>
  );
};

export default BackToTop;
