import React from "react";
import { useSelector } from "react-redux";
import UpcomingMatchCard from "./UpcomingMatchCard";

const UpcomingMatches = () => {
  const upcomingMatches = useSelector(
    (state) => state.upcomingMatch.upcomingMatch
  );

  if (!upcomingMatches.length) return null;

  return (
    <div className="bg-black pt-12 pb-3 px-4 sm:px-6 lg:px-14">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-gray-100">Upcoming Matches</p>
      </div>
      <div className="my-6 overflow-x-scroll flex space-x-4  w-full scrollbar-thin scrollbar-thumb-gray-400">
        {upcomingMatches.map((match) => (
          <div key={match._id} className="flex-shrink-0">
            <UpcomingMatchCard match={match} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMatches;
