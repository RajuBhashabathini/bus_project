import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between bg-black p-2 items-center">
      <div className="">
        <img
          src="https://img.cdn.itspl.net/cdn/B2C_RT/VRL/images/logo.svg?d=1.0.0.3"
          alt="logo"
          loading="lazy"
        ></img>
      </div>
      <div className="flex w-1/2 justify-around">
        <p className="text-white">Home</p>
        <p className="text-white">About</p>
        <p className="text-white">Signin/Signout</p>
      </div>
    </div>
  );
};

export default Header;
