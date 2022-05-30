import React from "react";
import Footer from "../Shared/Footer";
import Accessories from "./Accessories";
import Banner from "./Banner";
import BuisnessSummary from "./BuisnessSummary";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-16">
        <Accessories></Accessories>
        <BuisnessSummary></BuisnessSummary>
        <Reviews></Reviews>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
