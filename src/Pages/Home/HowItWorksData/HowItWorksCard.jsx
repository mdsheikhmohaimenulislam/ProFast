
import React from "react";

const HowItWorksCard = ({ data }) => {

    const {icon, title, description} = data || {}

  return (
    <div className="card  w-full bg-base-100 shadow-md hover:shadow-lg transition">
      <div className="card-body items-center text-center">
        <div className="text-4xl text-primary">{icon}</div>
        <h2 className="card-title text-xl font-semibold mt-2">{title}</h2>
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
