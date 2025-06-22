import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router"; //  correct package

const ProFastLogo = () => {
  return (
    <Link to="/">
      <div className="flex items-end">
        <img className="mb-2 w-10 h-10" src={logo} alt="ProFast Logo" />
        <p className="text-3xl -ml-3 font-extrabold">ProFast</p>
      </div>
     </Link>
  );
};

export default ProFastLogo;
