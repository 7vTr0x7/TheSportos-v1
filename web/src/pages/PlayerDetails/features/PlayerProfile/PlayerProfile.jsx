import React from "react";

const PlayerProfile = ({ player }) => {
  return (
    <div className="my-8">
      <div className="flex items-center gap-10 text-gray-50">
        <img
          alt={player.name}
          src={player.imageUrl}
          className="h-32 rounded-lg"
        />
        <div>
          <p className="text-3xl font-bold">{player.name}</p>
          <p className="text-gray-400 text-sm my-1">{player.position}</p>
          <p className="text-gray-400 text-sm">{player.email}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
