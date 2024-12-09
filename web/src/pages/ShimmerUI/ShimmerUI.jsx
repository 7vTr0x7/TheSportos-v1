import React from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

const ShimmerUI = () => {
  return (
    <>
      <Header />

      <div className="bg-black h-[100vh]"></div>

      <Footer />
    </>
  );
};

export default ShimmerUI;
