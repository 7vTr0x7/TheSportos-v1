import React from "react";

const PlayerCard = ({ players }) => {
  return (
    <div className="bg-[#222222] text-gray-50">
      {players &&
        players.map((player, index) => (
          <div
            key={player.number}
            className={`w-full  px-10 ${
              index % 2 === 1 ? "bg-[#151515]" : "bg-[#222222]"
            }`}>
            <div className="flex items-center py-7 justify-between md:w-6/12 w-full">
              <div className="flex items-center md:gap-7 gap-3">
                <p className=" font-normal">{player.number}</p>
                <p className=" font-normal">{player.name}</p>
              </div>
              <p className=" font-normal">{player.position}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PlayerCard;
