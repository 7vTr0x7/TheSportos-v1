import React from "react";
import { manCity } from "../../../../images";
import { BsArrowUpRightCircle } from "react-icons/bs";

const NewsBanner = ({ news }) => {
  return (
    <div className="relative w-full h-full rounded-lg shadow-lg">
      <img
        alt={news.category}
        src={news.image_url}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 p-4 rounded-lg">
        <div className="flex items-center gap-3 mb-2">
          <img alt="club" src={manCity} className="h-8 w-8 sm:h-10 sm:w-10" />
          <p className="text-gray-300 text-sm sm:text-base">
            {new Date(news.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-xl sm:text-2xl font-bold text-white">
            {news.title}
          </p>
          <BsArrowUpRightCircle className="text-yellow-300 text-4xl ml-3 md:mx-5" />
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
