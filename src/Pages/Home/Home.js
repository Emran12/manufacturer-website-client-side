import React from "react";
import Accessories from "./Accessories";
import BuisnessSummary from "./BuisnessSummary";
// import Banner from "../Home/Banner";

const home = () => {
  return (
    <div className="mx-16">
      {/* <Banner></Banner> */}

      <Accessories></Accessories>
      <BuisnessSummary></BuisnessSummary>
    </div>
  );
};

export default home;
