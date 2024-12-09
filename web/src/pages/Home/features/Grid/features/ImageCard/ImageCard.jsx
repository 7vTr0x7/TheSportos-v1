import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const ImageCard = () => {
  const [banner, setBanner] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  // Function to fetch banner data
  const getBannerData = async () => {
    try {
      const res = await fetch(`${apiUrl}/api/user/banner`, {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        console.error("Failed to fetch banner data");
        return;
      }

      const data = await res.json();

      if (data.success) {
        setBanner(data.banner[0]?.imageUrl || "");
      }
    } catch (error) {
      console.error("Error fetching banner data:", error.message);
    }
  };

  useEffect(() => {
    // Initial banner fetch
    getBannerData();

    const socket = io(apiUrl, { transports: ["websocket"] });

    socket.on("dataUpdated", () => {
      console.log("Data updated, refreshing...");
      getBannerData(); // Fetch latest data
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection failed:", error.message);
    });

    return () => {
      socket.disconnect();
    };
  }, [apiUrl]);

  return (
    <div className="rounded-lg shadow-lg overflow-hidden w-full">
      {banner ? (
        <img
          alt="banner"
          src={banner}
          className="w-full md:h-[500px] object-cover"
        />
      ) : (
        <div className="w-full h-[500px] flex justify-center items-center">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
