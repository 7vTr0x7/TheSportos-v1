import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomDropdown from "../../../../../../components/CustomDropDown";
import StandingsCard from "../../../../../../components/StandingsCard";

const Standings = () => {
  const leaguesData = useSelector((state) => state.leagues.leagues);
  const leagues = leaguesData.map((league) => league.league);

  const [league, setLeague] = useState(leagues[0] || "Select League");
  const [stats, setStats] = useState([]);
  const standings = useSelector((state) => state.standings.standings);

  // Set the initial league value if `leagues` is updated
  useEffect(() => {
    if (leagues.length > 0 && !league) {
      setLeague(leagues[0]);
    }
  }, [leagues]);

  useEffect(() => {
    if (league) {
      const filtered = standings.filter((stand) => stand.league === league);
      setStats(filtered);
    }
  }, [league, standings]);

  if (leagues.length === 0) {
    return (
      <div className="bg-[#222222] my-10 rounded-lg shadow-lg py-7 w-full">
        <p className="text-gray-50 text-xl font-semibold mb-3 px-5 md:px-7">
          Standings
        </p>
        <p className="text-gray-50 text-sm text-center mb-3 px-5 md:px-7">
          No leagues available
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#222222] my-10 rounded-lg shadow-lg py-7 w-full">
      <p className="text-gray-50 text-xl font-semibold mb-3 px-5 md:px-7">
        Standings
      </p>
      <div className="px-5 md:px-7">
        <CustomDropdown
          setLeague={setLeague}
          league={league}
          options={leagues}
        />
      </div>
      {stats.length > 0 ? (
        <StandingsCard stats={stats} />
      ) : (
        <p className="text-gray-50 text-sm text-center mb-3 px-5 md:px-7">
          {league === "Select League" ? "Select League" : "No Standings Found"}
        </p>
      )}
    </div>
  );
};

export default Standings;
