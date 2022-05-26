import React from "react";
import { Link } from "react-router-dom";

const Accessory = ({ accessory }) => {
  const { img, description, productName, minOrderQnty, availableQnty, price } =
    accessory;
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{productName}</h2>
        <p>
          {description.length > 200
            ? `${description.slice(0, 300)}`
            : `${description}`}
        </p>
        <div className="font-bold text-info-700 text-xl">
          <p>Price: ${price}</p>
          <p>Availability:{availableQnty}</p>
          <p>Minimum Order Quantity: {minOrderQnty}</p>
        </div>

        <div className="card-actions">
          <Link to="/">
            <button className="btn btn-primary">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Accessory;
