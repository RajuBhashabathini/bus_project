import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../Redux/userDetails";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.userDetails.details[0]);
  console.log("userDetails 1122", userDetails);
  return (
    <div className="flex justify-between bg-black p-2 items-center">
      <img
        src="https://img.cdn.itspl.net/cdn/B2C_RT/VRL/images/logo.svg?d=1.0.0.3"
        alt="logo"
        loading="lazy"
      />
      <div className="flex w-1/2 justify-around items-center">
        <p className="text-white p-0 m-0">Home</p>
        <p className="text-white p-0 m-0">About</p>
        <p className="text-white p-0 m-0">Contact</p>
        <p className="text-white p-0 m-0">Help</p>
        {userDetails.isUserLoggedIn ? (
          <button className="text-black border border-black px-3 py-2 rounded-full bg-yellow-500 ">
            {userDetails.firstName}
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/signin");
            }}
            className="text-black border border-black px-3 py-2 rounded-full bg-yellow-500 "
          >
            SignIn/SignUp
          </button>
        )}
        {userDetails.isUserLoggedIn ? (
          <button
            className="border border-blue-500 text-black bg-yellow-300 rounded-full px-3 py-2"
            onClick={() => {
              dispatch(logOutUser);
            }}
          >
            SignOut
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
