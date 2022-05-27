import React from "react";
import { useNavigate } from "react-router-dom";

const Accessory = ({ accessory }) => {
  const {
    _id,
    img,
    description,
    productName,
    minOrderQnty,
    price,
    availableQnty,
  } = accessory;

  const navigate = useNavigate();

  const handleOrder = (id) => {
    navigate(`/order/${id}`);
  };
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
          <button onClick={() => handleOrder(_id)} className="btn btn-primary">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accessory;
