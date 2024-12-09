import React from "react";

const OngoingMatchStats = ({ match }) => {
  const getGoalData = (teamGoals) => {
    return teamGoals.map((goal) => ({
      goal: goal.player,
      assist: goal.assist,
      count: 1,
    }));
  };
  const team1Goals = getGoalData(match?.goals?.team1 || []);
  const team2Goals = getGoalData(match?.goals?.team2 || []);

  const allGoals = [...team1Goals, ...team2Goals];

  return (
    <>
      <div className="bg-[#222222] flex text-sm justify-between px-10 font-semibold rounded-tr-lg rounded-tl-lg py-1">
        <p>Goals</p>
        <p>Assists</p>
      </div>
      <div className="mb-2">
        {allGoals.map((goal, index) => (
          <div
            key={index}
            className="bg-[#222222] grid grid-cols-12 text-xs items-center px-2 my-1 font-semibold py-1">
            <div className="flex justify-between col-span-5">
              <p>{goal.goal}</p> {/* Player who scored */}
              <p>{goal.count}</p> {/* Goal count (1 for each goal) */}
            </div>
            <div className="flex justify-center">
              <div className="h-6 w-[1px] bg-gray-600 ml-5" />
            </div>
            <p className="col-span-5 text-right">{goal.assist}</p>{" "}
          </div>
        ))}
      </div>
    </>
  );
};

export default OngoingMatchStats;
