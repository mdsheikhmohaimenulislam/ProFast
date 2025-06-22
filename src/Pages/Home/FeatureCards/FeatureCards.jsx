import React from "react";
import img1 from "../../../../public/Tracking.png";
import img2 from "../../../../public/Delivery.png";
import img3 from "../../../../public/Support.png";

const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    img: img1,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: img2,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: img3,
  },
];

const FeatureCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1  gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-base-100 shadow-md rounded-xl p-10"
          >
            {/* Left side image */}
            <img src={item.img} alt={item.title} className="w-30 bg-white h-30 object-contain" />

  {/* Dotted Vertical Divider */}
  <div className="border-l border-dotted border-white h-30" />

            {/* Right side content */}
            <div >
                
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm ">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
