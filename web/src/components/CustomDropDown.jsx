import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const CustomDropdown = ({ options, setLeague, league }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setLeague(option);
    setIsOpen(false);
  };

  return (
    <div className="relative md:m-0 mb-4 w-4/12 text-sm max-w-xs md:max-w-[20%] lg:max-w-[25%]">
      <button
        onClick={toggleDropdown}
        className="bg-[#151515] text-gray-100 py-2 px-4 rounded-lg shadow-lg w-full flex justify-between items-center focus:outline-none">
        {league}
        <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 bg-[#1e1e1e] rounded-lg shadow-lg mt-2 max-h-60 overflow-y-auto border border-gray-700 z-10">
          {options.map((option, index) => (
            <div
              key={option._id || index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-gray-100 cursor-pointer hover:bg-[#333] transition-colors">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
