import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Order = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [accessory, setAccessory] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [inputField, setInputField] = useState(false);
  const [counter, setCounter] = useState(0);
  const [decBtnDisabled, setDecBtnDisabled] = useState(false);
  const [increBtnDisabled, setIncreBtnDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/accessories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAccessory(data);
      });
    setCounter(accessory.minOrderQnty);
  }, [id, accessory.minOrderQnty]);

  const incrementCounter = (e) => {
    setCounter(counter + 1);
    console.log(counter);
    if (counter >= accessory.availableQnty) {
      setErrorMessage(
        <p className="text-red-500">
          Please Order within {accessory.availableQnty} pieces
        </p>
      );
      setIncreBtnDisabled(true);
    }
    if (counter >= accessory.minOrderQnty) {
      setDecBtnDisabled(false);
    }
  };

  const decrementCounter = (e) => {
    const temp = counter - 1;
    setCounter(temp);
    console.log(counter);
    if (counter <= accessory.minOrderQnty) {
      setErrorMessage(
        <p className="text-red-500">
          Please Order minimum {accessory.minOrderQnty} pieces
        </p>
      );
      setDecBtnDisabled(true);
    }
    if (counter <= accessory.availableQnty) {
      setIncreBtnDisabled(false);
    }
  };

  const handleInputQnty = (e) => {
    e.preventDefault();
    setCounter(e.target.value);
    if (counter < accessory.minOrderQnty) {
      setInputField(true);
      setIncreBtnDisabled(true);
      setDecBtnDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const qnty = counter;
    console.log(e.target.address.value);
    const totalPrice = qnty * accessory.price;
    const data = {
      buyer: user.email,
      productName: accessory.productName,
      img: accessory.img,
      quantity: qnty,
      unitPrice: `$${accessory.price}`,
      totalPrice: ` $${totalPrice}`,
      phoneNumber: e.target.phone.value,
      address: e.target.address.value,
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
    navigate("/home");
  };

  return (
    <div className="mx-16">
      <div className="flex justify-evenly">
        <div className="w-96">
          <img
            src={accessory.img}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <h1 className="text-3xl font-bold py-4 mt-5">
            {accessory.productName}
          </h1>
          <p className="py-4">{accessory?.description?.slice(0, 250)}</p>
        </div>
        <div className="pt-12">
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

          <p>
            <span className="text-xl text-blue-500">Quantity:</span>
            <button
              className="border-2 border-black p-2"
              onClick={decrementCounter}
              disabled={decBtnDisabled}
            >
              -
            </button>
            <input
              value={counter}
              className="w-24 p-2 m-2 border-2 border-black"
              id="inputQnty"
              onChange={handleInputQnty}
              disabled={inputField}
            />
            <button
              className="border-2 border-black p-2"
              onClick={incrementCounter}
              disabled={increBtnDisabled}
            >
              +
            </button>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 mt-6">
              <input
                type="text"
                name="name"
                id=""
                placeholder={user?.displayName}
                className="border-2 border-blue-300 w-64 h-12 text-xl "
                disabled
              />
              <input
                type="email"
                name="email"
                id=""
                placeholder={user?.email}
                className="border-2 border-blue-300 w-64 h-12 text-xl "
                disabled
              />
              <input
                type="tel"
                name="phone"
                id=""
                placeholder="Enter Phone Number"
                className="border-2 border-blue-300 w-64 h-12 text-xl "
              />
              <input
                type="text"
                name="address"
                id=""
                placeholder="Enter address"
                className="border-2 border-blue-300 w-64 h-12 text-xl "
              />
            </div>

            <button className="btn btn-primary">Order Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
