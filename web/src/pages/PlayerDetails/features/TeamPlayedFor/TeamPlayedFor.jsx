import React from "react";
import { manUnited } from "../../../../images";

const TeamPlayedFor = ({ player }) => {
  return (
    <div className="col-span-1 relative">
      <p className="text-gray-50 text-sm md:text-base">Team Played for</p>
      <div className="absolute top-0 right-5 flex items-center mt-2 text-gray-500">
        <div className="grid grid-cols-4 gap-4 md:gap-8 text-center text-xs md:text-sm">
          <p>P</p>
          <p>W</p>
          <p>D</p>
          <p>L</p>
        </div>
      </div>
      <div className="bg-[#222222] mt-5 rounded-lg text-gray-50 font-semibold">
        {player.teamsPlayedFor.map((team, index) => (
          <div key={team.teamName}>
            <div
              className={`flex items-center justify-between px-3 md:px-5 py-2 ${
                index % 2 === 1 ? "bg-[#151515]" : ""
              } ${
                index === player.teamsPlayedFor.length - 1 ? "rounded-b-lg" : ""
              }`}>
              <div className="flex items-center gap-2 md:gap-3 w-1/2">
                <div className="flex justify-center items-center p-1 md:p-2">
                  <img
                    className="h-6 md:h-10"
                    alt={team.teamName}
                    src={manUnited}
                  />
                </div>
                <div>
                  <p className="font-semibold text-xs md:text-sm">
                    {team.teamName}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(team.startDate).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 md:gap-8 w-1/3 text-center text-gray-500 text-xs md:text-sm">
                <p>{team.stats.played}</p>
                <p>{team.stats.won}</p>
                <p>{team.stats.drawn}</p>
                <p>{team.stats.lost}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPlayedFor;
