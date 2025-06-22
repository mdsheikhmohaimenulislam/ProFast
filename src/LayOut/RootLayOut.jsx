import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const RootLayOut = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100vh-350px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayOut;
