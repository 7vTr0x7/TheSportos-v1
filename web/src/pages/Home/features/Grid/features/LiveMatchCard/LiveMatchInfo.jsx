import React from "react";
import LiveMatchCard from "./LiveMatchCard";
import { useSelector } from "react-redux";

const LiveMatchInfo = () => {
  const matches = useSelector((state) => state.upcomingMatch.upcomingMatch);

  const match = matches.find((m) => m.status === "Live");

  return (
    <div className="">
      <p className="text-gray-50 text-2xl  mb-6">Live Match</p>
      <LiveMatchCard match={match} />
    </div>
  );
};

export default LiveMatchInfo;
