import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NewsCard from "../../../Home/features/News/features/NewsCard";
import NewsBanner from "../NewsBanner/NewsBanner";

function NewsGrid() {
  const [page, setPage] = useState(1);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 640);
  const [fadeClass, setFadeClass] = useState("");

  const news = useSelector((state) => state.blogs.blogs);
  const itemsPerPage = isMobileView ? 1 : news.length;

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.matchMedia("(max-width: 640px)").matches);
      setPage(1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextPageHandler = () => {
    if (news.length > page * itemsPerPage) {
      setFadeClass("fade-in-right");
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setFadeClass("fade-out-left");
      }, 300);
    }
  };

  const prevPageHandler = () => {
    if (page > 1) {
      setFadeClass("fade-in-left");
      setTimeout(() => {
        setPage((prev) => prev - 1);
        setFadeClass("fade-out-right");
      }, 300);
    }
  };

  return (
    <div className="bg-black w-full select-none">
      <div className="w-full">
        <h1 className="text-white text-xl px-5 md:p-0 sm:text-2xl mb-3 md:mb-6">
          Latest News
        </h1>
        {isMobileView && (
          <div className="flex justify-end text-gray-300 gap-3 my-3 mx-3 text-[18px] sm:text-[20px]">
            <FiArrowLeft onClick={prevPageHandler} className="cursor-pointer" />
            <FiArrowRight
              onClick={nextPageHandler}
              className="cursor-pointer"
            />
          </div>
        )}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8  ${fadeClass}`}>
          {news
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((news, index) => (
              <div
                key={news._id}
                className={`flex flex-row cursor-pointer  lg:h-[430px] ${
                  index % 6 === 0
                    ? "col-span-12  lg:col-span-8 md:col-span-8"
                    : "col-span-12  lg:col-span-4 md:col-span-4"
                }`}
                onClick={() =>
                  navigate(`/news/${news.category}`, { state: { news } })
                }>
                {index % 6 === 0 ? (
                  <NewsBanner news={news} />
                ) : (
                  <NewsCard news={news} newsPage={true} />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default NewsGrid;
