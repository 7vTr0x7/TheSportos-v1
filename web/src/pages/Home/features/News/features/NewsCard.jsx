import React from "react";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ news, newsPage }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${
        newsPage ? "bg-[#222222] rounded-lg shadow-lg " : "p-4"
      } cursor-pointer`}
      onClick={() => navigate(`/news/${news.category}`, { state: { news } })}>
      <div>
        <img
          alt={news.category}
          src={news.image_url}
          className={`w-full object-cover ${
            newsPage
              ? "h-60 md:h-90 w-full md:w-[400px]"
              : "w-full md:w-[400px] h-60 md:h-90"
          } rounded-md`}
        />
      </div>
      <div className={`${newsPage ? "px-4 pb-4" : ""}`}>
        <div
          className={`flex gap-2 items-center text-gray-50 mt-4 text-xs sm:text-sm`}>
          <p className="bg-yellow-400 text-black rounded-xl px-2 sm:px-4 ">
            {news.category}
          </p>
          <p>
            {new Date(news.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <p className="text-xl sm:text-xl font-semibold text-gray-50 mt-3">
          {news.title.length > 50
            ? `${news.title.slice(0, 50)}...`
            : news.title}
        </p>
        <p className="text-sm text-gray-50 mt-2">{news.introductionPara}</p>
      </div>
    </div>
  );
};

export default NewsCard;
