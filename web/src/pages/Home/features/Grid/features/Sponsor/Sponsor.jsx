import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const Sponsor = ({ text }) => {
  const [sponsor, setSponsor] = useState("");
  const [link, setLink] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const getSponsorData = async (apiUrl) => {
    try {
      const res = await fetch(`${apiUrl}/api/user/sponsor`, {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        console.log("Failed to get data");
      }

      const data = await res.json();

      if (data.success) {
        setSponsor(data?.sponsor[0]?.imageUrl);
        setLink(data?.sponsor[0]?.linkUrl);
      }
    } catch (error) {
      console.log("failed to get Sponsor Data", error.message);
    }
  };

  useEffect(() => {
    // Initial banner fetch
    getSponsorData(apiUrl);
    // Initialize WebSocket connection
    const socket = io(apiUrl, { transports: ["websocket", "polling"] });

    // Listen for data updates
    socket.on("dataUpdated", () => {
      console.log("Banner data updated, refreshing...");
      getSponsorData(apiUrl);
    });

    // Clean up the WebSocket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, [apiUrl]);

  return (
    sponsor && (
      <div className="text-gray-50 mt-7 mb-3">
        <p className={`text-[28px] mb-4  ${text && "mt-6"}`}>Sponsor</p>
        <div className="my-3 cursor-pointer">
          <a href={link} target="_blank">
            <img
              alt="Sponsor"
              src={sponsor}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>
      </div>
    )
  );
};

export default Sponsor;
