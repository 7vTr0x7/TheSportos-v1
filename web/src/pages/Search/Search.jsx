import React, { useEffect, useMemo } from "react";
import SearchNav from "./features/SearchNav";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Player from "./features/Player";
import NewsCard from "./features/NewsCard";

const Search = () => {
  const navigate = useNavigate();

  const playersData = useSelector((state) => state.players.players);
  const blogsData = useSelector((state) => state.blogs.blogs);
  const searchedText = useSelector((state) => state.search.search);

  const filteredPlayers = useMemo(() => {
    if (!searchedText) return playersData.map((player) => player.name);
    return playersData
      .filter((player) =>
        player.name.toLowerCase().includes(searchedText.toLowerCase())
      )
      .map((player) => player.name);
  }, [searchedText, playersData]);

  const filteredBlogs = useMemo(() => {
    if (!searchedText) return blogsData;
    return blogsData.filter((blog) =>
      blog.title.toLowerCase().includes(searchedText.toLowerCase())
    );
  }, [searchedText, blogsData]);

  return (
    <>
      <SearchNav />
      <div className="bg-black min-h-screen px-6 sm:px-12 md:px-20 lg:px-28 xl:px-44 py-12">
        <div className="flex justify-between items-center text-gray-50">
          <p className="text-2xl font-semibold">Players</p>
          <HiOutlineArrowRight
            className="text-2xl cursor-pointer"
            onClick={() => navigate("/players")}
          />
        </div>

        <div className="mt-7 flex flex-wrap gap-5">
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((player, index) => (
              <Player key={index} player={player} />
            ))
          ) : (
            <p className="text-gray-400">No players found</p>
          )}
        </div>

        <div className="flex justify-between items-center text-gray-50 mt-10">
          <p className="text-2xl font-semibold">News</p>
          <HiOutlineArrowRight
            className="text-2xl cursor-pointer"
            onClick={() => navigate("/news")}
          />
        </div>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredBlogs.length > 0 ? (
            filteredBlogs
              .slice(0, 3)
              .map((news, index) => <NewsCard key={index} news={news} />)
          ) : (
            <p className="text-gray-400">No news found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
