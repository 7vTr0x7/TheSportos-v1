import React from "react";
import FeaturedPlayerCard from "../../../../components/FeaturedPlayerCard";
import Goals from "./Goals";
import PreviousStats from "./PreviousStats";

const Stats = ({ match, status }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-4 mx-6 my-6 gap-3 ">
      <PreviousStats match={match} status={status} />
      {(status === "Live" || status === "Completed") && (
        <Goals status={status} goals={match.goals} />
      )}
      {status === "Completed" && (
        <FeaturedPlayerCard player={match.featuredPlayer} status={status} />
      )}
    </div>
  );
};

export default Stats;
