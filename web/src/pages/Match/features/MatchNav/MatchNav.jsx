import React from "react";

const MatchNav = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <ul className="flex flex-wrap gap-3  items-center justify-start select-none">
        <li
          className={`px-3 py-1 rounded-md cursor-pointer ${
            activeTab === "teamLineup"
              ? "bg-yellow-400"
              : "bg-[#222222] text-gray-500"
          }`}
          onClick={() => setActiveTab("teamLineup")}>
          Team Lineup
        </li>
        <li
          className={`px-3 py-1 rounded-md cursor-pointer ${
            activeTab === "stats"
              ? "bg-yellow-400"
              : "bg-[#222222] text-gray-500"
          }`}
          onClick={() => setActiveTab("stats")}>
          Stats
        </li>
      </ul>
    </>
  );
};

export default MatchNav;
