import React from "react";
import placeholderImage from "../../../images/image.png";
import { useNavigate } from "react-router-dom";

const PlayerCard = ({ player }) => {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-lg mb-5 bg-[#151515] md:w-10/12 cursor-pointer"
      onClick={() =>
        navigate(
          `/players/${encodeURIComponent(
            `${player.name.replace(/\s+/g, "-")}`
          )}`
        )
      }>
      {/* Image Container */}
      <div className="relative w-full">
        <img
          alt={player.name}
          src={player.imageUrl || placeholderImage}
          className="rounded-t-lg w-full md:w-[300px] md:h-[300px] h-[191px] object-cover"
          loading="lazy"
        />
      </div>
      {/* Content Section */}
      <div className="flex md:flex-row justify-between items-center px-4 py-2">
        <div>
          <p className="text-gray-50 font-semibold text-sm md:text-xl">
            {player.name}
          </p>
          <div className="flex gap-2 items-center">
            <img
              alt={player.country}
              src={player.flagImageUrl}
              className="h-4 w-4 object-contain"
              loading="lazy"
            />
            <p className="text-gray-50 m-0 text-xs">{player.country}</p>
          </div>
        </div>
        <p className="text-gray-50 font-bold text-xl md:text-4xl">
          {player.number}
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;
