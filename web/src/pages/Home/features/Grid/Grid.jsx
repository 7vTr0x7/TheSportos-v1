import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ImageCard from "./features/ImageCard/ImageCard";
import LiveMatchInfo from "./features/LiveMatchCard/LiveMatchInfo";
import ScheduledMatchCard from "./features/ScheduledMatch/ScheduledMatchCard";
import CompletedMatchCard from "./features/CompletedMatch/CompletedMatchCard";
import Sponsor from "./features/Sponsor/Sponsor";
import FeaturedPlayer from "./features/FeaturedPlayer/FeaturedPlayer";
import StarPerformers from "./features/StarPerformers/StarPerformers";
import Standings from "./features/Standings/Standings";
import Trophies from "./features/Trophies/Trophies";
import { useNavigate } from "react-router-dom";

const Grid = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-black pb-4 grid grid-cols-12 gap-5 px-4 sm:px-6 md:px-10 lg:px-14">
      <div className="col-span-12 md:col-span-8">
        <ImageCard />
        <StarPerformers />
        <Standings />
        <Trophies />
        <ImageCard />
      </div>

      <div className="col-span-12 md:col-span-4 space-y-8">
        <LiveMatchInfo />

        <div>
          <div className="text-white flex justify-between items-center mt-8 mb-6">
            <p className="text-gray-50 text-xl md:text-2xl">Next Match</p>
            <div
              className="text-gray-50 text-xs md:text-sm flex gap-1 items-center cursor-pointer"
              onClick={handleClick}>
              <p>All Matches</p>
              <MdKeyboardArrowRight className="text-gray-50 text-lg md:text-xl " />
            </div>
          </div>
          <ScheduledMatchCard />
        </div>

        <div>
          <div className="text-white flex justify-between items-center mt-8 mb-6">
            <p className="text-gray-50 text-xl md:text-2xl">Last Match</p>
            <div
              className="text-gray-50 text-xs md:text-sm flex gap-1 items-center cursor-pointer"
              onClick={() => navigate(`/fixtures`)}>
              <p>All Matches</p>
              <MdKeyboardArrowRight className="text-gray-50 text-lg md:text-xl cursor-pointer" />
            </div>
          </div>
          <CompletedMatchCard />
        </div>

        <Sponsor />
        <FeaturedPlayer />
      </div>
    </div>
  );
};

export default Grid;
