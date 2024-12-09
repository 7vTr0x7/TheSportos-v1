import React from "react";

const PlayerInformation = ({ player }) => {
  return (
    <div className="col-span-1">
      <p className="text-gray-50">Player information</p>
      <div className=" bg-[#222222] mt-5 rounded-lg  text-gray-50 text-semibold">
        <div className="flex items-center justify-between py-4  px-5  ">
          <p>Date of Birth</p>
          <p>
            {new Date(player?.playerProfile?.dateOfBirth).toLocaleDateString(
              "en-GB",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </p>
        </div>
        <div className="flex items-center justify-between py-4 px-5 bg-[#151515]">
          <p>Preferred Foot</p>
          <p>{player.playerProfile.preferredFoot}</p>
        </div>
        <div className="flex items-center justify-between py-4 px-5 ">
          <p>Location</p>
          <p>{player.playerProfile.location}</p>
        </div>
        <div className="flex items-center justify-between py-4 px-5 bg-[#151515] rounded-b-lg">
          <p>Preferred Position</p>
          <p>{player.playerProfile.preferredPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerInformation;
