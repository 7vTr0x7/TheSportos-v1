import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PlayerInformation from "./features/PlayerInformation/PlayerInformation";
import PlayerProfile from "./features/PlayerProfile/PlayerProfile";
import RecentFixtures from "./features/RecentFixtures/RecentFixtures";
import TeamPlayedFor from "./features/TeamPlayedFor/TeamPlayedFor";

const PlayerDetails = () => {
  const [players, setPlayersData] = useState(null);
  const params = useParams();
  const name = params.player.replace("-", " ");

  const apiUrl = import.meta.env.VITE_API_URL;

  const getPlayers = async (apiUrl) => {
    try {
      const res = await fetch(`${apiUrl}/api/user/players`, {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        console.log("Failed to get data");
      }

      const data = await res.json();

      if (data.success) {
        setPlayersData(data?.players);
      }
    } catch (error) {
      console.log("failed to get players Data", error.message);
    }
  };

  useEffect(() => {
    getPlayers(apiUrl);
  }, []);

  const player = Array.isArray(players)
    ? players.find((play) => play.name === name)
    : {};

  return (
    player.name && (
      <>
        <Header />
        <div className="md:pb-20 pb-10 bg-black">
          <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-center text-gray-900 font-semibold h-32 sm:h-48 flex justify-center items-center text-2xl sm:text-4xl">
            Players
          </div>
          <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
            <Breadcrumbs />
          </div>
          <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
            <PlayerProfile player={player} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
            <PlayerInformation player={player} />
            <TeamPlayedFor player={player} />
          </div>
          <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
            <RecentFixtures recentFixtures={player.recentFixtures} />
          </div>
        </div>
        <Footer />
      </>
    )
  );
};

export default PlayerDetails;
