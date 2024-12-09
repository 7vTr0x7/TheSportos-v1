import React from "react";
import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";
import NewsGrid from "./features/NewsGrid/NewsGrid";

const NewsPage = () => {
  return (
    <>
      <Header />
      <>
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-center text-gray-900 font-semibold h-28 sm:h-36 md:h-48 flex justify-center items-center text-2xl md:text-4xl">
          News
        </div>

        <div className="px-4 md:px-8 lg:px-16 py-3 bg-black">
          <Breadcrumbs />
        </div>

        <div className=" md:px-8 lg:px-16 pt-6 pb-16 bg-black w-full">
          <NewsGrid />
        </div>
      </>
      <Footer />
    </>
  );
};

export default NewsPage;
