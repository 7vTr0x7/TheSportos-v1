import React from "react";
import FixturesMatches from "../FixturesMatches/FixturesMatches";
import Results from "../Results/Results";
import Standings from "../Standings/Standings";

const RenderContent = ({ activeTab, league }) => {
  return (
    <>
      {activeTab === "fixtures" && <FixturesMatches />}
      {activeTab === "results" && <Results />}
      {activeTab === "standings" && <Standings league={league} />}
    </>
  );
};

export default RenderContent;
