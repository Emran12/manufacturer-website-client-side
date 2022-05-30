import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://immense-oasis-14118.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-blue-800 mt-16">
        Customer Reviews
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.slice(0, 3).map((review) => (
          <div key={review._id}>
            <div className="card w-96 h-96 bg-white shadow-xl">
              <div>
                <figure className="px-10 pt-10">
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={review.img} alt="" />
                    </div>
                  </div>
                </figure>

                <h2 className="text-center text-xl">{review.buyerName}</h2>
              </div>
              <div>
                <div className="card-body items-center text-center">
                  <img src={review.ratings} alt="" />
                  <p>{review.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Reviews;
