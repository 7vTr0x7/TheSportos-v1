import React, { useEffect, useState } from "react";
import FeaturedPlayerCard from "../../../../../../components/FeaturedPlayerCard";
import { io } from "socket.io-client";

const FeaturedPlayer = () => {
  const [featuredPlayer, setFeaturedPlayer] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  const getFeaturedPlayer = async (apiUrl) => {
    try {
      const res = await fetch(`${apiUrl}/api/user/featured-player`, {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        console.log("Failed to get data");
      }

      const data = await res.json();

      if (data.success) {
        setFeaturedPlayer(data?.players[0]);
      }
    } catch (error) {
      console.log("failed to get Sponsor Data", error.message);
    }
  };

  useEffect(() => {
    // Initial banner fetch
    getFeaturedPlayer(apiUrl);
    // Initialize WebSocket connection

    const socket = io(apiUrl, { transports: ["websocket"] });

    socket.on("dataUpdated", () => {
      console.log("Data updated, refreshing...");
      getFeaturedPlayer(apiUrl);
      apiUrl; // Fetch latest data
    });

    // Clean up the WebSocket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, [apiUrl]);

  return (
    <div className="py-4">
      <p className="text-[28px]  mb-4 text-gray-50">Featured Player</p>
      {featuredPlayer && <FeaturedPlayerCard player={featuredPlayer} />}
    </div>
  );
};

export default FeaturedPlayer;
