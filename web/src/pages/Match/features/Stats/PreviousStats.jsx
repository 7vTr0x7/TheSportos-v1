import React from "react";

const PreviousStats = ({ match, status }) => {
  return (
    <div
      className={`text-gray-50 bg-[#151515] px-4 py-4  rounded-lg shadow-md mb-4 md:mb-0 ${
        status === "complete" ? "md:w-full" : "md:w-5/12"
      }`}>
      <h2 className="text-center text-lg font-bold mb-4">Head-to-Head</h2>
      <div className="flex justify-between text-sm font-semibold mb-2">
        <p>Wins</p>
        <p>Played</p>
        <p>Wins</p>
      </div>
      <div className="flex justify-between text-center text-sm mb-3 px-2">
        <p>{match.headToHead.wins.team1}</p>
        <p>{match.headToHead.played}</p>
        <p>{match.headToHead.wins.team2}</p>
      </div>
      <hr className="my-2 border-gray-600" />
      <div className="flex justify-between text-sm mb-3 px-2">
        <p>{match.headToHead.homeWins.team1}</p>
        <p>Home</p>
        <p>{match.headToHead.homeWins.team2}</p>
      </div>
      <hr className="my-2 border-gray-600" />
      <div className="flex justify-between text-sm px-2">
        <p>{match.headToHead.awayWins.team1}</p>
        <p>Away</p>
        <p>{match.headToHead.awayWins.team2}</p>
      </div>
      <div className="mt-4">
        <p className="text-center font-bold">Previous Result</p>
        <div className="flex items-center mt-2 text-xs md:text-sm px-2 md:px-1">
          <div className="flex gap-2 items-center col-span-5 flex-1">
            <p>{match.previousResult.team1.name}</p>
            <img
              alt={match.previousResult.team1.name}
              src={match.team1.logo_url}
              className="h-8"
            />
          </div>

          <div className="flex justify-center gap-2">
            <p>{match.previousResult.team1.score}</p>
            <div className="h-6 w-[1px] bg-gray-600" />
            <p>{match.previousResult.team2.score}</p>
          </div>

          <div className="flex gap-2 items-center  flex-1 float-end justify-end">
            <img
              alt={match.previousResult.team2.name}
              src={match.team2.logo_url}
              className="h-8"
            />
            <p>{match.previousResult.team2.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousStats;
