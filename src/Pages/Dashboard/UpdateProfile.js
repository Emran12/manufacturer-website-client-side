import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    fetch(`https://immense-oasis-14118.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user.email]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.displayName.value)
      e.target.displayName.value = user.displayName;

    if (!e.target.phone.value) e.target.phone.value = userInfo.phoneNumber;
    if (!e.target.address.value) e.target.address.value = userInfo.address;

    const updatedData = {
      displayName: e.target.displayName.value,
      phoneNumber: e.target.phone.value,
      address: e.target.address.value,
    };
    fetch(`https://immense-oasis-14118.herokuapp.com/users/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => console.log("success", data));
    // navigate("/dashboard");
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <div>
          <h1 className="t text-blue-600 font-bold text-3xl mb-12">
            Update Profile
          </h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
            <input
              className="border-2 border-black w-96 h-10 "
              type="text"
              name="displayName"
              id=""
              placeholder={user.displayName}
            />
            <input
              className="border-2 border-black w-96 h-10 "
              type="email"
              name="email"
              id=""
              placeholder={user.email}
              disabled
            />
            <input
              className="border-2 border-black w-96 h-10 "
              type="tel"
              name="phone"
              id=""
              placeholder={userInfo.phoneNumber}
            />
            <input
              className="border-2 border-black w-96 h-10 "
              type="text"
              name="address"
              id=""
              placeholder={userInfo.address}
            />
            <input
              type="submit"
              placeholder="update"
              className="border bg-blue-600 text-white p-2 w-64 uppercase"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
