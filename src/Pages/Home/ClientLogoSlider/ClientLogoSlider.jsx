import React from "react";
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";
import Marquee from "react-fast-marquee";

// Replace with your own image URLs or import from assets
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientLogoSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-base-200 py-10 mb-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          We've helped thousands of sales teams
        </h2>

        {/* Logo Marquee */}
        <Marquee pauseOnHover={true} speed={50} gradient={false}>
          {logos.map((logo, index) => (
            <div key={index} className="mx-16 flex-shrink-0">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ClientLogoSlider;
