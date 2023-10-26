import React from "react";
import hero from "../images/hero.jpg";
import heroMobile from "../images/hero_mobile.jpg";

function Hero() {
  return (
    <div className={`flex flex-col`}>
      <div className="text-center z-10 px-4 mt-6 xs:mt-20">
        <h1 className="text-4xl font-frank">
          Furniture For A Better Way To Work
        </h1>
        <h2 className="text-xl">
          Build a beautiful office without breaking the bank.
        </h2>
        <button className="px-20 py-3 bg-main-green text-white mt-4 font-bold text-md uppercase">
          Shop Now
        </button>
        <p className="mt-2">
          Need help? <span className="font-bold">Take Our Quiz</span>
        </p>
      </div>
      <img
        src={heroMobile}
        alt=""
        className="absolute top-52 xs:top-40 min-[500px]:top-20 sm:top-0 min-w-[200px] w-full md:hidden"
      />
      <img src={hero} alt="" className="hidden md:absolute top-0" />
    </div>
  );
}

export default Hero;
