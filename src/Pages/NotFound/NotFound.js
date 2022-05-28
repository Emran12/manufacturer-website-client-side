import React from "react";
import img from "./404.png";
const NotFound = () => {
  return (
    <div className="px-20 mt-5 flex justify-center items-center">
      <div>
        <img src={img} alt="" />
        <p className="font-bold text-3xl font-serif mt-2 text-center ">
          404-PAGE NOT FOUND
        </p>
        <p className=" font-serif mt-2">
          The page you are looking for might have been removed had its name
          changed or temporarily unavailable.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
