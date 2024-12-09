import React, { useEffect, useState } from "react";
import MatchCard from "../MatchCard/MatchCard";
import { useSelector } from "react-redux";

const FixturesMatches = ({ league }) => {
  const matchesData = useSelector((state) => state.upcomingMatch.upcomingMatch);
  const [matches, setMatches] = useState(matchesData);
  const months = [
    ...new Set(
      matches
        .filter((match) => match.status === "Upcoming")
        .map((match) => match.month)
    ),
  ].sort((a, b) => b.localeCompare(a));

  useEffect(() => {
    if (league) {
      setMatches(matchesData.filter((match) => match.competition === league));
    }
  }, [league]);

  return (
    <>
      {months.length > 0 ? (
        months.map((month, index) => (
          <div key={index}>
            <p className="text-gray-50 text-lg sm:text-xl mb-2 md:mb-4">
              {month}
            </p>
            {matches &&
              matches
                .filter((match) => match.status === "Upcoming")
                .filter((match) => match.month === month)
                .map((match) => <MatchCard match={match} key={match._id} />)}
          </div>
        ))
      ) : (
        <p className="text-gray-50 text-sm text-center mb-2 md:mb-4">
          No Fixtures Found
        </p>
      )}
    </>
  );
};

export default FixturesMatches;
