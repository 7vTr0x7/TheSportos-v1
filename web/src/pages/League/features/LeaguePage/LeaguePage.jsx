import React, { useState } from "react";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { useLocation } from "react-router-dom";

import leagueImg from "../../../../images/arsenal.png";
import OngoingMatchCard from "../OngoingMatch/OngoingMatchCard";
import LeagueStats from "../LeagueStats/LeagueStats";
import RenderLeagueStats from "../RenderLagueStats/RenderLeagueStats";

const LeaguePage = () => {
  const [activeTab, setActiveTab] = useState("standings");

  const location = useLocation();

  const { league } = location.state;

  return (
    <>
      <Header />
      <>
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-center text-gray-900 font-semibold h-32 sm:h-48 flex justify-center items-center text-2xl sm:text-4xl">
          League
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          <Breadcrumbs />
        </div>
        <div className="px-4 flex  md:justify-between flex-wrap  md:px-20 lg:px-32 py-3 md:pt-14 text-gray-50  bg-black">
          <div className="flex md:gap-8 gap-4 mb-20">
            <img
              alt={league.league}
              src={league.logo_url}
              className="md:h-36 rounded-md"
            />
            <div>
              <p className="font-bold text-3xl">{league.league}</p>
              <p className="text-gray-500 text-sm mt-2">{`${new Date(
                league.start_date
              ).toLocaleDateString()} to ${new Date(
                league.end_date
              ).toLocaleDateString()}`}</p>
              <p className="text-gray-500 text-sm">{`${league.views} views`}</p>
            </div>
          </div>
          <OngoingMatchCard league={league.league} />
        </div>
        <div className="relative px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          <LeagueStats activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3  bg-black">
          <RenderLeagueStats activeTab={activeTab} league={league.league} />
        </div>
      </>
      <Footer />
    </>
  );
};

export default LeaguePage;
