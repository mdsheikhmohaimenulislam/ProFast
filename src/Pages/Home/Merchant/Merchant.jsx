import React from "react";
import location from "../../../assets/location-merchant.png";

const Merchant = () => {
  return (
    <div data-aos="fade-up "  className=" bg-no-repeat  bg-[#03373D] bg-[url('assets/be-a-merchant-bg.png')] rounded-4xl p-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={location} className="max-w-sm rounded-lg  " />
        <div>
          <h1 className="text-5xl font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <button className="btn btn-primary text-black rounded-full">Become a Merchant</button>
          <button className="btn ms-5 btn-primary hover:text-black btn-outline rounded-full">Earn with Profast Courier</button>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
