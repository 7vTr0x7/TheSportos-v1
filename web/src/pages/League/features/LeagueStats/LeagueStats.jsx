import React from "react";

const LeagueStats = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <ul className="md:absolute md:top-[-50px] flex flex-wrap gap-3  items-center justify-start select-none">
        <li
          className={`px-3 py-1 rounded-md cursor-pointer ${
            activeTab === "standings"
              ? "bg-yellow-400"
              : "bg-[#222222] text-gray-500"
          }`}
          onClick={() => setActiveTab("standings")}>
          Standings
        </li>
        <li
          className={`px-3 py-1 rounded-md cursor-pointer ${
            activeTab === "fixtures"
              ? "bg-yellow-400"
              : "bg-[#222222] text-gray-500"
          }`}
          onClick={() => setActiveTab("fixtures")}>
          Fixtures
        </li>
      </ul>
    </>
  );
};

export default LeagueStats;
