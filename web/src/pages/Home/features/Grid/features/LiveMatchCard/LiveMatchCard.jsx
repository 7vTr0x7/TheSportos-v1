import React from "react";

const LiveMatchCard = ({ match }) => {
  return (
    <div className="relative rounded-lg bg-[#151515]">
      {!match?.FT && (
        <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center text-gray-400">
          <p>{match?.competition}</p>
          <hr className="w-6/12 h-[2px] bg-red-500 border-0 dark:bg-red-50 mb-4" />{" "}
        </div>
      )}

      <div
        className={`grid grid-cols-12 bg-[#151515] rounded-lg text-gray-100 p-4 ${
          !match?.FT && "pt-8"
        }`}>
        <div className="col-span-4 flex flex-col items-center">
          <p className="font-semibold text-sm text-center truncate">
            {match?.team1?.name}
          </p>
          <div className="flex items-center justify-center bg-[#222222] p-5 rounded-full w-20 h-20 my-3">
            <img
              alt={match?.team1?.name}
              src={match?.team1?.logo_url}
              className="h-full w-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="col-span-4 flex flex-col items-center justify-center font-semibold pt-6">
          <p className={`${match?.FT ? "" : "text-gray-400 font-normal"}`}>
            {match?.FT ? "FT" : "Full time"}
          </p>
          <div className="flex gap-5 pt-3">
            <p className="text-xl ">{match?.score?.team1}</p>
            <p className="text-xl ">-</p>
            <p className="text-xl ">{match?.score?.team2}</p>
          </div>
          <p className="text-center flex justify-center whitespace-nowrap text-sm  font-normal mt-4">
            {match?.stadium}
          </p>
          <p className="text-center font-normal mt-2 bg-red-800 px-4 rounded-xl  flex justify-center whitespace-nowrap text-sm text-black">
            {match?.status === "Live" && "• Live"}
          </p>
        </div>

        <div className="col-span-4 flex flex-col items-center">
          <p className="font-semibold text-sm text-center truncate">
            {match?.team2?.name}
          </p>
          <div className="flex items-center justify-center bg-[#222222] p-5 rounded-full w-20 h-20 my-3">
            <img
              alt={match?.team2?.name}
              src={match?.team2?.logo_url}
              className="h-full w-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMatchCard;
