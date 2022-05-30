import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import userImg from "../../images/user.png";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://immense-oasis-14118.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user.email]);

  const handleEditProfile = () => {
    navigate("/dashboard/updateprofile");
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-blue-500 mt-16">
        My Profile
      </h1>
      <div className="grid  grid-cols-3 ml-12">
        <div className="mt-12">
          <img src={userImg} alt="" className="rounded-full w-32 h-32" />
        </div>
        <div className="col-span-2 mt-16">
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>Phone Number: {userInfo.phoneNumber}</p>
          <p>Address: {userInfo.address}</p>
          <button
            onClick={handleEditProfile}
            className="uppercase bg-blue-500 text-white p-2 rounded mt-6"
          >
            edit profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
