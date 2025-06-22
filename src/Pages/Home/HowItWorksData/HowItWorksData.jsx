
import React from "react";
import HowItWorksCard from "./HowItWorksCard";
import { FaBox, FaCheckCircle, FaMapMarkedAlt, FaTruck } from "react-icons/fa";

const datas = [
  {
    icon: <FaBox />,
    title: "Package Pickup",
    description: "Schedule your package for pickup from your location.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Real-time Tracking",
    description: "Track your package through every step of the journey.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    description: "We deliver quickly and reliably to any destination.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Safe Arrival",
    description: "Your package arrives safely and on time, every time.",
  },
];

const HowItWorksData = () => {
  return (
    <div className="my-10 px-4 md:px-12 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">How it Works</h2>
      </div>
     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {datas.map((data, idx) => (
          <HowItWorksCard
            key={idx}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorksData;
