import React from "react";
import { useNavigate } from "react-router-dom";

const Player = ({ player }) => {
  const navigate = useNavigate();
  console.log(player);
  return (
    <p
      className="bg-[#151515] rounded-xl py-2 px-4 text-gray-50 text-xl cursor-pointer"
      onClick={() =>
        navigate(
          `/players/${encodeURIComponent(`${player.replace(/\s+/g, "-")}`)}`
        )
      }>
      {player}
    </p>
  );
};

export default Player;
