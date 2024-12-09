import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MatchCard from "../Fixtures/features/MatchCard/MatchCard";
import MatchNav from "./features/MatchNav/MatchNav";
import RenderMatchInfo from "./features/RenderMatchInfo/RenderMatchInfo";

const Match = () => {
  const [activeTab, setActiveTab] = useState("teamLineup");
  const [activeTeam, setActiveTeam] = useState("Real Madrid");

  const location = useLocation();
  const match = location?.state?.match;

  return (
    <>
      <Header />
      <>
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-center text-gray-900 font-semibold h-32 sm:h-48 flex justify-center items-center text-2xl sm:text-4xl">
          Fixtures
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          <Breadcrumbs />
        </div>
        <div className="md:px-32 px-3 pt-5 pb-5 bg-black">
          <MatchCard match={match} view={true} />
        </div>
        <div className={` px-4 sm:px-8 md:px-16 lg:px-32 pt-3 bg-black`}>
          <MatchNav setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        <div className={`md:px-28  py-3 bg-black`}>
          <RenderMatchInfo
            activeTab={activeTab}
            activeTeam={activeTeam}
            setActiveTeam={setActiveTeam}
            match={match}
          />
        </div>
      </>
      <Footer />
    </>
  );
};

export default Match;
