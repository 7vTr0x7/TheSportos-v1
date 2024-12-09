import React from "react";

const CompletedMatchStats = ({ match }) => {
  const countGoals = (goals) => {
    const goalCounts = {};
    goals.forEach((goal) => {
      goalCounts[goal.player] = (goalCounts[goal.player] || 0) + 1;
    });
    return goalCounts;
  };

  const team1Goals = countGoals(match?.goals?.team1 || []);
  const team2Goals = countGoals(match?.goals?.team2 || []);

  return (
    <>
      <div className="px-4">
        <p className="font-bold text-center text-xs">Goals</p>
        <div className="grid grid-cols-12">
          {/* Team 1 Goals */}
          <div className="col-span-5">
            {Object.keys(team1Goals).map((player, index) => (
              <div
                key={index}
                className="flex justify-between font-semibold text-xs text-white">
                <p>{player}</p>
                <p>{team1Goals[player]}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="col-span-2 flex justify-center">
            <div className="h-6 w-[1px] bg-gray-600" />
          </div>

          {/* Team 2 Goals */}
          <div className="col-span-5">
            {Object.keys(team2Goals).map((player, index) => (
              <div
                key={index}
                className="flex justify-between font-semibold text-xs text-white">
                <p>{team2Goals[player]}</p>
                <p>{player}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4">
        <p className="font-bold text-center text-xs">Assists</p>
        <div className="grid grid-cols-12">
          {/* Team 1 Assists */}
          <div className="col-span-5">
            {match?.goals?.team1?.map((goal, index) => (
              <div
                key={index}
                className="flex justify-between font-semibold text-xs text-white">
                <p>{goal.assist}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="col-span-2 flex justify-center">
            <div className="h-6 w-[1px] bg-gray-600" />
          </div>

          {/* Team 2 Assists */}
          <div className="col-span-5">
            {match?.goals?.team2?.map((goal, index) => (
              <div
                key={index}
                className="flex justify-end font-semibold text-xs text-white">
                <p>{goal.assist}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompletedMatchStats;
