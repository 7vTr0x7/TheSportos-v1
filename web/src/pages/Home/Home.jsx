import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Grid from "./features/Grid/Grid";
import News from "./features/News/News";
import UpcomingMatches from "./features/UpcomingMatches/UpcomingMatches";

const Home = () => {
  return (
    <div className="select-none">
      <Header />
      <UpcomingMatches />
      <Grid />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
