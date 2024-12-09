import React, { useState } from "react";

import { useSelector } from "react-redux";
import CustomDropdown from "../../../../components/CustomDropDown";
import MatchCard from "../MatchCard/MatchCard";

const Results = () => {
  const results = useSelector((state) => state.results.results);
  const leagues = useSelector((state) => state.leagues.leagues).map(
    (league) => league.league
  );

  const [league, setLeague] = useState(leagues[0]);

  const months = [
    ...new Set(
      results
        .filter((match) => match.competition === league)
        .map((match) => match.month)
    ),
  ].sort((a, b) => b.localeCompare(a));

  const matches = results.filter((result) => result.competition === league);

  return (
    <>
      <div className="md:w-8/12 w-10/12">
        <CustomDropdown
          league={league}
          setLeague={setLeague}
          options={leagues}
        />
      </div>
      <div className="my-4">
        {months.length > 0 ? (
          months.map((month) => (
            <div key={month}>
              <p className="text-gray-50 text-lg sm:text-xl my-2 sm:my-4">
                {month}
              </p>

              {matches &&
                matches
                  .filter((match) => match.month === month)
                  .map((match) => <MatchCard match={match} key={match._id} />)}
            </div>
          ))
        ) : (
          <p className="text-gray-50 text-sm text-center my-2 sm:my-4">
            No match found
          </p>
        )}
      </div>
    </>
  );
};

export default Results;
