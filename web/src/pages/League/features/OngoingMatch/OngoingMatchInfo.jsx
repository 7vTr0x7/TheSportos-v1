import React from "react";

import { manUnited, manCity } from "../../../../images";

const OngoingMatchInfo = ({ match }) => {
  return (
    <div className="flex-grow">
      <div className="flex justify-between px-2">
        <p className="font-semibold text-sm">{match.club1.name}</p>
      </div>
      <div className="grid grid-cols-12 items-center px-2">
        <div className="col-span-4 justify-center flex rounded-full p-4 bg-[#222222] my-2">
          <img alt={match?.club1?.name} src={manUnited} className="h-14" />
        </div>
        <div className="col-span-8">
          <p className="text-end w-full font-semibold">{match?.time}</p>
          <div className="relative top-3">
            <p className="font-semibold text-sm mx-2">
              Established:{" "}
              <span className="font-normal text-sm">
                {match?.club1?.established}
              </span>
            </p>
            <p className="font-semibold text-sm mx-2">
              Homeground:{" "}
              <span className="font-normal text-sm">
                {match?.club1?.homeGround}
              </span>
            </p>
            <p className="font-semibold text-sm mx-2">
              Venue:{" "}
              <span className="font-normal text-sm">{match?.club1?.venue}</span>
            </p>
            <div className="w-1/2 my-2">
              <p className="relative top-3 bg-yellow-300 rounded-lg font-semibold text-sm text-center">
                {match?.matchType}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingMatchInfo;
