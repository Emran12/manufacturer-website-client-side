import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Order = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [accessory, setAccessory] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);
  const [inputField, setInputField] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/accessories/${id}`)
      .then((res) => res.json())
      .then((data) => setAccessory(data));
  }, [id]);

  const handleQuantity = (e) => {
    const inputQnty = e.target.value;
    console.log(inputQnty, e);
    if (
      inputQnty < accessory.minOrderQnty ||
      inputQnty > accessory.availableQnty
    )
      setInputField(true);
    if (inputQnty < accessory.minOrderQnty) {
      setErrorMessage(
        <p className="text-red-500">
          Please Order minimum {accessory.minOrderQnty} pieces
        </p>
      );
      setIsdisabled(true);
    } else if (
      inputQnty > accessory.availableQnty &&
      inputQnty < accessory.minOrderQnty
    ) {
      setErrorMessage(
        <p className="text-red-500">
          Please Order within {accessory.availableQnty} pieces
        </p>
      );
      setIsdisabled(true);
    } else {
      setErrorMessage("");
      setIsdisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const qnty = e.target.quantity.value;
    const totalPrice = qnty * accessory.price;
    const data = {
      buyer: user.email,
      productName: accessory.productName,
      img: accessory.img,
      quantity: qnty,
      unitPrice: `$${accessory.price}`,
      totalPrice: ` $${totalPrice}`,
    };

    fetch(`http://localhost:5000/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });

    const data2 = {
      availableQnty: accessory.availableQnty,
      bookedQnty: qnty,
    };
    fetch(`http://localhost:5000/accessories/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data2),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });
  };

  return (
    <div className="mx-16">
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={accessory.img}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div className="m-16">
            <h1 className="text-5xl font-bold">{accessory.productName}</h1>
            <p className="py-4">{accessory?.description?.slice(0, 250)}</p>
            <p>
              Availability:
              {accessory.availableQnty >= accessory.minOrderQnty ? (
                <span className="text-secondary">
                  Stock Available {accessory.availableQnty}
                </span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </p>
            <p>
              Minimum Order Quantity:
              {accessory.minOrderQnty > 1
                ? ` ${accessory.minOrderQnty} pieces `
                : ` ${accessory.minOrderQnty} piece`}
            </p>
            <p>Price: ${accessory.price}</p>
            {errorMessage}
            <form onSubmit={handleSubmit}>
              <input
                className="border-2  border-blue-500 rounded h-12"
                type="number"
                name="quantity"
                value={accessory.minOrderQnty}
                disabled={inputField}
                onChange={handleQuantity}
                id=""
              />

              <button className="btn btn-primary" disabled={isDisabled}>
                Order Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
