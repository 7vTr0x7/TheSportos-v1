import React, { useEffect, useState } from "react";
import TrophyCard from "./TrophyCard";
import { io } from "socket.io-client";

const Trophies = () => {
  const [trophies, setTrophies] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const getTrophiesData = async (apiUrl) => {
    try {
      const res = await fetch(`${apiUrl}/api/user/trophies`, {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        console.log("Failed to get data");
      }

      const data = await res.json();

      if (data.success) {
        setTrophies(data?.trophies);
      }
    } catch (error) {
      console.log("failed to get Trophies Data", error.message);
    }
  };

  useEffect(() => {
    // Initial banner fetch
    getTrophiesData(apiUrl);
    const socket = io(apiUrl, { transports: ["websocket", "polling"] });

    socket.on("dataUpdated", () => {
      console.log("Data updated, refreshing...");
      getTrophiesData(apiUrl);
      apiUrl; // Fetch latest data
    });
    // Clean up the WebSocket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, [apiUrl]);

  return (
    <div className="bg-[#151515] mb-10 py-5 px-4 sm:px-6 lg:px-7 rounded-lg">
      <p className="text-lg sm:text-xl font-semibold text-gray-100 mb-4">
        Trophies
      </p>
      <div className="overflow-x-scroll flex space-x-4 w-full scrollbar-thin scrollbar-thumb-gray-400">
        {trophies &&
          trophies.map((trophy) => (
            <div key={trophy._id} className="flex-shrink-0">
              <TrophyCard trophy={trophy} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trophies;
