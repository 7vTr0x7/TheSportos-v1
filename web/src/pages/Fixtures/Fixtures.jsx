import React, { useState } from "react";
import { useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs";
import CustomDropdown from "../../components/CustomDropDown";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FixturesNav from "./features/FixturesNav/FixturesNav";
import RenderContent from "./features/RenderContent/RenderContent";
const Fixtures = () => {
  const [activeTab, setActiveTab] = useState("fixtures");

  const leagues = useSelector((state) => state.leagues.leagues).map(
    (league) => league.league
  );

  const [league, setLeague] = useState(leagues[0]);

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
        <div
          className={` px-4 sm:px-8 md:px-16 lg:px-32 p-3 bg-black ${
            activeTab === "standings" && "flex items-center justify-between"
          }`}>
          <FixturesNav activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "standings" && (
            <CustomDropdown
              setLeague={setLeague}
              league={league}
              options={leagues || []}
            />
          )}
        </div>
        <div className="relative px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          <RenderContent activeTab={activeTab} league={league} />
        </div>
      </>
      <Footer />
    </>
  );
};

export default Fixtures;
