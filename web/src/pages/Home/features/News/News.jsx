import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NewsCard from "./features/NewsCard";

const News = () => {
  const [newsPages, setNewsPages] = useState(3);

  const news = useSelector((state) => state.blogs.blogs);

  useEffect(() => {
    const handleResize = () => {
      setNewsPages(window.innerWidth < 640 ? 1 : 3);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-black pb-6 px-4 sm:px-6 lg:px-14">
      <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-4">
        Latest News
      </p>
      <div className="overflow-x-scroll flex space-x-4 w-full scrollbar-thin scrollbar-thumb-gray-400">
        {news &&
          news.map((newsItem) => (
            <div key={newsItem._id} className="flex-shrink-0">
              <NewsCard news={newsItem} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default News;
