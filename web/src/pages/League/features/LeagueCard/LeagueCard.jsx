import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const LeagueCard = ({ league }) => {
  return (
    <div className="col-span-1 bg-[#222222] p-4 rounded-lg md:w-auto w-[180px]">
      <div>
        <img
          alt={league.league}
          src={league.logo_url}
          className="md:h-28 md:w-28 h-20 w-20 rounded-md"
        />
      </div>
      <div className="flex justify-between text-gray-50 items-center gap-3 mt-2 mx-1 text-sm  md:text-lg md:font-semibold">
        <p>{league.league}</p>
        <Link
          to={`/league/${encodeURIComponent(
            `${league.league.replace(/\s+/g, "-")}`
          )}`}
          state={{ league }}>
          <BsArrowRight className="text-xl " />
        </Link>
      </div>
    </div>
  );
};

export default LeagueCard;
