import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StandingsCard from "../../../../components/StandingsCard";

const Standings = ({ league }) => {
  const [stats, setStats] = useState([]);
  const standings = useSelector((state) => state.standings.standings);

  useEffect(() => {
    const filtered = standings.filter((stand) => stand.league === league);
    setStats(filtered);
  }, [league]);

  return (
    <>
      <div className="bg-[#222222] my-10 rounded-lg shadow-lg py-7 w-full">
        <p className="text-gray-50 text-xl font-semibold mb-3 px-5 md:px-7">
          Standings
        </p>
        {stats && stats.length > 0 ? (
          <StandingsCard stats={stats} />
        ) : (
          <p className="text-gray-50 text-sm text-center mb-3 px-5 md:px-7">
            No Standings Found
          </p>
        )}
      </div>
    </>
  );
};

export default Standings;
