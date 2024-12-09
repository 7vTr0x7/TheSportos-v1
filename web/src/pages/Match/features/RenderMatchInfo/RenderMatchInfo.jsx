import React from "react";
import Stats from "../Stats/Stats";
import TeamLineup from "../TeamLineup/TeamLineup";

const RenderMatchInfo = ({ activeTab, activeTeam, setActiveTeam, match }) => {
  return (
    <>
      {activeTab === "teamLineup" && (
        <TeamLineup
          activeTeam={activeTeam}
          setActiveTeam={setActiveTeam}
          match={match}
        />
      )}
      {activeTab === "stats" && <Stats match={match} status={match.status} />}
    </>
  );
};

export default RenderMatchInfo;
