import React from "react";

const ScheduledMatchInfo = ({ match }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-12 gap-2 md:gap-4 text-gray-50 items-center">
      <div className="col-span-1 md:col-span-4 flex flex-col items-center">
        <p className="font-semibold text-xs md:text-sm truncate text-center">
          {match.team1.name}
        </p>
        <div className="flex justify-center items-center rounded-full p-3 md:p-4 bg-[#222222] my-2">
          <img
            alt={match.team1.name}
            src={match.team1.logo_url}
            className="h-10 w-10 md:h-16 md:w-16 object-contain"
          />
        </div>
      </div>

      <div className="col-span-1 md:col-span-4 flex flex-col items-center text-center">
        <p className="font-semibold text-xs md:text-sm whitespace-nowrap">
          {match.timeLeft.daysLeft} day{match.timeLeft.daysLeft !== 1 && "s"}{" "}
          {match.timeLeft.hoursLeft} hr{match.timeLeft.hoursLeft !== 1 && "s"}{" "}
          left
        </p>
        <div className="flex justify-center mb-2 md:mb-3 font-bold text-2xl md:text-4xl">
          <p className="mx-1 md:mx-2">v/s</p>
        </div>
        <p className="font-semibold text-xs md:text-sm">{match.stadium}</p>
      </div>

      <div className="col-span-1 md:col-span-4 flex flex-col items-center">
        <p className="font-semibold text-xs md:text-sm truncate text-center">
          {match.team2.name}
        </p>
        <div className="flex justify-center items-center rounded-full p-3 md:p-4 bg-[#222222] my-2">
          <img
            alt={match.team2.name}
            src={match.team2.logo_url}
            className="h-10 w-10 md:h-16 md:w-16 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduledMatchInfo;
