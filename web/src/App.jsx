import React, { lazy, Suspense, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import { setBlogs } from "./app/slices/blogsSlice";
import { setPlayers } from "./app/slices/playerSlice";
import { setResults } from "./app/slices/resultsSlice";
import { setStandings } from "./app/slices/standingsSlice";
import { setUpcomingMatch } from "./app/slices/upcomingMatchesSlice";
import { setLeagues } from "./app/slices/leaguesSlice";
import ShimmerUI from "./pages/ShimmerUI/ShimmerUI";
import {
  fetchBlogsData,
  fetchLeagues,
  fetchMatchesData,
  fetchPlayersData,
  fetchStandingsData,
} from "./utils/apis";

const Home = lazy(() => import("./pages/Home/Home"));
const Search = lazy(() => import("./pages/Search/Search"));
const Fixtures = lazy(() => import("./pages/Fixtures/Fixtures"));
const League = lazy(() => import("./pages/League/League"));
const LeaguePage = lazy(() =>
  import("./pages/League/features/LeaguePage/LeaguePage")
);
const Match = lazy(() => import("./pages/Match/Match"));
const NewsPage = lazy(() => import("./pages/News/NewsPage"));
const NewsDetails = lazy(() =>
  import("./pages/News/features/NewsDetails.jsx/NewsDetails")
);
const PlayerDetails = lazy(() => import("./pages/PlayerDetails/PlayerDetails"));
const Players = lazy(() => import("./pages/Players/Players"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));

const App = () => {
  const dispatch = useDispatch();
  const apiUrl = import.meta.env.VITE_API_URL;

  const refreshData = useCallback(async () => {
    try {
      const [matchData, blogData, playersData, standings, leagues] =
        await Promise.all([
          fetchMatchesData(apiUrl),
          fetchBlogsData(apiUrl),
          fetchPlayersData(apiUrl),
          fetchStandingsData(apiUrl),
          fetchLeagues(apiUrl),
        ]);

      if (matchData.success) {
        dispatch(
          setUpcomingMatch(
            matchData.matches.filter(
              (match) => match.status === "Upcoming" || match.status === "Live"
            )
          )
        );
        dispatch(
          setResults(
            matchData.matches.filter(
              (match) => match.status === "Live" || match.status === "Completed"
            )
          )
        );
      }

      if (blogData.success) dispatch(setBlogs(blogData.blogs));
      if (playersData.success) dispatch(setPlayers(playersData.players));
      if (standings.success) dispatch(setStandings(standings.standingsData));
      if (leagues.success) dispatch(setLeagues(leagues.leagues));
    } catch (error) {
      console.error("Data fetching failed", error.message);
    }
  }, [dispatch, apiUrl]);
 useEffect(() => {
   refreshData();

   const socket = io(apiUrl);

   socket.on("dataUpdated", () => {
     console.log("Data updated, refreshing...");
     refreshData(); // Fetch latest data
   });

   return () => {
     socket.disconnect();
   };
 }, [refreshData, apiUrl]);

  return (
    <div>
      <Router>
        <Suspense fallback={<ShimmerUI />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/fixtures/:match" element={<Match />} />
            <Route path="/league" element={<League />} />
            <Route path="/league/:league" element={<LeaguePage />} />
            <Route path="/players" element={<Players />} />
            <Route path="/players/:player" element={<PlayerDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:category" element={<NewsDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
