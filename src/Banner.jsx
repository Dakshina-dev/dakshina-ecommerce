import React from "react";
import banner from './assets/banner.png'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div className="p-10 flex gap-5 items-center justify-center max-h-[500px] bg-orange-300/50">
        <div className="flex flex-col  gap-10 items-start">
        <h2 className="text-2xl pl-5 font-bold">🎉 Unwrap Exclusive Deals This Season! 🎁</h2>
        <h2 className="min-w-96 pl-5 max-w-[700px] md:max-w-[500px] text-lg">
          Shop our Holiday Sale and enjoy up to 50% OFF on bestsellers, new
          arrivals, and limited-time specials! Whether you're treating yourself
          or finding the perfect gift, our collection has something for
          everyone.
        </h2>
       <Link to="/products"> <button className="px-6 py-2 ml-5 bg-gray-300 text-lg font-semibold hover:text-white hover:bg-black">
          Explore Now
        </button></Link>
        </div>
        <img className="hidden md:block min-w-[400px] max-w-[600px]" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
