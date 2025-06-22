import React from "react";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import ProFastLogo from "../Pages/Shared/ProFastLogo/ProFastLogo";

const AuthLayOut = () => {
  return (
    <div className="p-12">
      <div>
        <ProFastLogo />
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 content-center min-h-screen">
          <img src={authImg} className="max-w-sm  rounded-lg" />
        </div>
        <div className="flex-1 min-h-screen content-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayOut;
