import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const url = `http://localhost:5000/orders/${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);

  const handleDelBtn = (id, productName) => {
    const confirm = window.confirm(
      `Are you sure want to delete ${productName}?`
    );
    if (confirm) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainingOrders = orders.filter((order) => order._id !== id);
          console.log(remainingOrders);
          setOrders(remainingOrders);
        });
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-blue-500 mb-6">
        My Orders
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Del.Btn.</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tbody key={order._id}>
              <tr>
                <th>
                  <img src={order.img} className="w-8 h-8" alt=""></img>
                  {order.productName}
                </th>
                <td>{order.quantity}</td>
                <td>{order.totalPrice}</td>
                <td>
                  <button
                    onClick={() => handleDelBtn(order._id, order.productName)}
                    className="bg-red-500 border p-2 rounded-xl"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
