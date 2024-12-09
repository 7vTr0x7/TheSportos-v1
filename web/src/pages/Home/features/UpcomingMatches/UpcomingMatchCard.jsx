import React from "react";
import { league } from "../../../../images";
import { HiArrowLongRight } from "react-icons/hi2";
import MatchCard from "../../../../components/MatchCardLayout";
import { useNavigate } from "react-router-dom";

const UpcomingMatchCard = ({ match }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#151515] text-gray-300 rounded-lg mb-4 p-4 md:p-6 shadow-lg w-[18rem] md:w-[18rem] h-[350px] flex flex-col">
      <div className="flex justify-center py-4">
        <img alt={match?.competition} src={league} className="h-16" />
      </div>
      <div className="text-center text-xs flex-grow">
        <p>
          {new Date(match.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p>{match?.stadium}</p>
      </div>
      <div className="mt-6 grid grid-cols-3 flex-grow">
        <MatchCard match={match} />
      </div>
      {match?.status === "Live" && (
        <div className="flex gap-2 justify-center items-center text-[#4f4f4f] text-center text-xs whitespace-nowrap mt-auto">
          <p
            className="cursor-pointer pl-5"
            onClick={() =>
              navigate(
                `/fixtures/${encodeURIComponent(
                  `${(match?.team1?.name || match?.team1).replace(
                    /\s+/g,
                    "-"
                  )}-vs-${(match?.team2?.name || match?.team2).replace(
                    /\s+/g,
                    "-"
                  )}`
                )}`,
                { state: { match } }
              )
            }>
            View Match
          </p>
          <HiArrowLongRight className="text-lg mt-1 cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default UpcomingMatchCard;
