import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const StarPerformers = () => {
  const [players, setPlayers] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  const getStarPerformersData = async (apiUrl) => {
    try {
      const res = await fetch(`${apiUrl}/api/user/star-performers`, {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        console.log("Failed to get data");
      }

      const data = await res.json();

      if (data.success) {
        setPlayers(data?.starPerformers);
      }
    } catch (error) {
      console.log("failed to get Star performers Data", error.message);
    }
  };

  useEffect(() => {
    // Initial banner fetch
    getStarPerformersData(apiUrl);
    // Initialize WebSocket connection
    const socket = io(apiUrl, { transports: ["websocket", "polling"] });

    // Listen for data updates
    socket.on("dataUpdated", () => {
      console.log("Banner data updated, refreshing...");
      getStarPerformersData(apiUrl);
    });

    // Clean up the WebSocket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, [apiUrl]);

  return (
    players &&
    players.length > 0 && (
      <div className="bg-[#222222] mt-10 rounded-lg shadow-lg py-7 overflow-x-scroll w-full scrollbar-thin scrollbar-thumb-gray-400">
        <p className="text-gray-50 text-lg md:text-xl font-semibold px-4 md:px-6">
          Star Performers
        </p>

        <div className="min-w-max mt-6">
          <div className="grid grid-cols-12 text-gray-400 text-xs md:text-sm lg:text-base px-4 md:px-6">
            <p className="col-span-3">Name</p>
            <p className="col-span-3">Achievement</p>
            <p className="col-span-3">Tournament</p>
            <div className="flex gap-4 justify-end col-span-3">
              <p>G</p>
              <p>A</p>
              <p>MP</p>
            </div>
          </div>

          {players &&
            players.sort((a, b) => a.rank - b.rank) &&
            players?.map((player, index) => (
              <div
                key={player._id}
                className={`grid grid-cols-12 mt-4 text-gray-50 text-xs md:text-sm lg:text-base py-3 px-4 md:px-6 ${
                  index % 2 === 0 ? "bg-[#151515]" : "bg-transparent"
                }`}>
                <div className="col-span-3 flex gap-2 items-center">
                  <img
                    alt={player.name}
                    src={player.imageUrl}
                    className="md:h-8 h-5 md:w-8 w-5 rounded-full"
                  />
                  <p>{player.name}</p>
                </div>
                <p className="col-span-3 flex items-center">
                  {player.achievement}
                </p>
                <p className="col-span-3 flex items-center">
                  {player.tournament}
                </p>
                <div className="flex gap-4 justify-end items-center col-span-3">
                  <p>{player.goals}</p>
                  <p>{player.assists}</p>
                  <p>{player.matches_played}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  );
};

export default StarPerformers;
