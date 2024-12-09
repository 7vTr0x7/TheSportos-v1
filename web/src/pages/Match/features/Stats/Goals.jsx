import React from "react";
import { FaFutbol } from "react-icons/fa";

const Goals = ({ status, goals }) => {
  console.log(goals);
  return (
    <div
      className={`text-gray-50 bg-[#151515]  px-6 py-6 rounded-lg shadow-md mb-4 md:mb-0 ${
        status === "complete" ? "md:w-8/12" : "md:w-4/12"
      }`}>
      <h2 className="text-center text-lg font-bold mb-4">Goals</h2>
      <div className="space-y-3">
        {goals.team2.map((goal, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex-1"></div>
            <FaFutbol className="text-2xl mx-2" />
            <div className="flex-1 text-left">
              <p className="text-white font-semibold">{goal.player}</p>
              <p className="text-gray-400 text-sm">{goal.assist}'s assist</p>
            </div>
          </div>
        ))}
        {goals.team1.map((goal, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex-1 text-right">
              <p className="text-white font-semibold">{goal.player}</p>
              <p className="text-gray-400 text-sm">{goal.assist}'s assist</p>
            </div>
            <FaFutbol className="text-2xl mx-2" />
            <div className="flex-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
