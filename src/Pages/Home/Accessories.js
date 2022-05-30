import React, { useEffect, useState } from "react";
import Accessory from "./Accessory";

const Accessories = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("https://immense-oasis-14118.herokuapp.com/accessories")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-blue-500 mt-12">
        Accessories
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-5">
        {parts.map((part) => (
          <Accessory key={part._id} accessory={part}></Accessory>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
