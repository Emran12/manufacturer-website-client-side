import React from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1 className="text-center font-bold text-blue-500 text-3xl mr-16 mt-6">
        Payment Status
      </h1>
      <div></div>
    </div>
  );
};

export default Payment;
