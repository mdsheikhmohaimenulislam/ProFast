import React from "react";

const ServiceCard = ({ service }) => {

    const {title,description,icon} = service || {}


  return (
    <div className="bg-base-100  hover:bg-[#CAEB66] hover:cursor-pointer hover:text-black  shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300 text-center">
      <div className="text-primary text-4xl mb-4 flex justify-center">
      {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm ">{description}</p>
    </div>
  );
};

export default ServiceCard;
