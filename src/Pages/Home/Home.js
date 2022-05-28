import React from "react";
import Footer from "../Shared/Footer";
import Accessories from "./Accessories";
import BuisnessSummary from "./BuisnessSummary";
import Reviews from "./Reviews";
// import Banner from "../Home/Banner";

const Home = () => {
  return (
    <div>
      <div className="mx-16">
        {/* <Banner></Banner> */}

        <Accessories></Accessories>
        <BuisnessSummary></BuisnessSummary>
        <Reviews></Reviews>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
