import React from "react";
import { useSelector } from "react-redux";
import ScheduledMatchInfo from "./ScheduledMatchInfo";
import ScheduledMatchStarts from "./ScheduledMatchStarts";

const ScheduledMatchCard = () => {
  const matches = useSelector((state) => state.upcomingMatch.upcomingMatch);

  const match = matches.find((m) => m?.status === "Upcoming");

  return (
    <>
      {match?.status === "Upcoming" && (
        <div className="bg-[#151515] rounded-lg w-full p-4 mb-4 flex flex-col shadow-lg ">
          <div className="bg-[#151515] rounded-lg p-4">
            <ScheduledMatchInfo match={match} />
            <hr className="h-[1px] bg-gray-50 border-0 mt-3 dark:bg-gray-50" />

            <ScheduledMatchStarts match={match} />
          </div>
        </div>
      )}
    </>
  );
};

export default ScheduledMatchCard;
