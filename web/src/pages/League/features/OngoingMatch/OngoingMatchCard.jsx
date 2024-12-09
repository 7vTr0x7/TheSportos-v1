import React from "react";
import OngoingMatchStats from "./OngoingMatchStats";

import { useSelector } from "react-redux";
import LiveMatchCard from "../../../Home/features/Grid/features/LiveMatchCard/LiveMatchCard";

const OngoingMatchCard = ({ text, league }) => {
  const matches = useSelector((state) => state.upcomingMatch.upcomingMatch);

  const liveMatch = matches
    .filter((match) => match.status === "Live")
    .find((match) => match?.competition === league);

  return liveMatch?.competition ? (
    <div className="bg-[#151515] rounded-lg md:w-4/12 w-full mb-2 h-full flex  px-2 flex-col shadow-lg ">
      <div className="relative text-center flex justify-center">
        <p className="font-semibold text-sm text-black bg-yellow-300 rounded-br-lg rounded-bl-lg px-10">
          {text ? text : liveMatch?.status}
        </p>
      </div>
      <LiveMatchCard match={liveMatch} />
      <hr className="h-[1px] bg-gray-400 border-0 my-2 dark:bg-gray-700" />
      <OngoingMatchStats match={liveMatch} />
    </div>
  ) : (
    <p className="text-sm text-gray-50 text-center">No Live match Found</p>
  );
};

export default OngoingMatchCard;
