import React from "react";

const TeamNav = ({ activeTeam, setActiveTeam, match }) => {
  return (
    <div className="relative mb-5">
      <div className="absolute bottom-0 left-0 w-6/12 h-[3px] bg-[#222222]"></div>

      <ul className="flex flex-wrap gap-3 items-center justify-start select-none relative">
        <li
          className={`px-3 py-1 cursor-pointer border-b-2 ${
            activeTeam === match.team1.name
              ? "border-b-yellow-400 text-white"
              : "border-b-transparent text-gray-500"
          }`}
          onClick={() => setActiveTeam(match.team1.name)}>
          {match?.team1?.name || match?.team1}
        </li>
        <li
          className={`px-3 py-1 cursor-pointer border-b-2 ${
            activeTeam === match.team2.name
              ? "border-b-yellow-400 text-white"
              : "border-b-transparent text-gray-500"
          }`}
          onClick={() => setActiveTeam(match.team2.name)}>
          {match?.team2?.name || match?.team2}
        </li>
      </ul>
    </div>
  );
};

export default TeamNav;
