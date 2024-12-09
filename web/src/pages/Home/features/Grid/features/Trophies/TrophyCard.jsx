import React from "react";

const TrophyCard = ({ trophy }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#222222] rounded-full flex justify-center items-center text-center p-4 md:p-6">
        <img
          alt={trophy.name}
          src={trophy.image_url}
          className="h-12 w-12 md:h-20 md:w-20 rounded-full"
        />
      </div>
      <p className="text-gray-50 mt-3 text-sm sm:text-base text-center">
        {trophy.name}
      </p>
    </div>
  );
};

export default TrophyCard;
