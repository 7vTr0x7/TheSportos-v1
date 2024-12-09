import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { useSelector } from "react-redux";
import LeagueCard from "./features/LeagueCard/LeagueCard";

const League = () => {
  const leagues = useSelector((state) => state.leagues.leagues);
  return (
    <>
      <Header />
      <>
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-center text-gray-900 font-semibold h-32 sm:h-48 flex justify-center items-center text-2xl sm:text-4xl">
          League
        </div>
        <div className="md:h-[100vh] h-auto bg-black ">
          <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
            <Breadcrumbs />
          </div>

          <div className="md:grid md:grid-cols-4 gap-5 flex flex-wrap px-4 sm:px-8 md:px-16 lg:px-32 py-3">
            {leagues &&
              leagues.map((league, index) => (
                <LeagueCard key={index} league={league} />
              ))}
          </div>
        </div>
      </>
      <Footer />
    </>
  );
};

export default League;
