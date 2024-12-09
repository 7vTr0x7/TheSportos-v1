import React from "react";

const MatchCardLayout = ({ match }) => {
  return (
    <>
      <div className="bg-[#151515] rounded-lg flex flex-col items-center">
        <p className="font-semibold text-sm whitespace-nowrap text-center">
          {match?.team1?.name}
        </p>
        <div className="flex items-center justify-center bg-[#222222] p-5 rounded-full w-20 h-20 my-3">
          <img
            alt={match?.team1?.name}
            src={match?.team1?.logo_url}
            className="h-full w-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center font-semibold">
        <div className="py-6">
          <p>{"FT"}</p>
          {match?.status === "Upcoming" ? (
            <p className="text-xl py-4">{match?.time}</p>
          ) : (
            <div className="text-xl py-4 flex md:gap-4 gap-7">
              <p>{match?.score?.team1}</p>
              <p>-</p>
              <p>{match?.score?.team2}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-semibold text-sm whitespace-nowrap text-center">
          {match?.team2?.name}
        </p>
        <div className="flex items-center justify-center bg-[#222222] p-5 rounded-full w-20 h-20 my-3">
          <img
            alt={match?.team2?.name}
            src={match?.team2?.logo_url}
            className="h-full w-full object-cover rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default MatchCardLayout;
