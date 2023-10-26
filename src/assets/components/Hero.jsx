import React from "react";
import hero from "../images/hero.jpg";

function Hero() {
  return (
    <div className={` flex border bg-[url(${hero})] text-black`}>
     <img src={hero} alt="" />
    </div>
  );
}

export default Hero;
