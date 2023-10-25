import React from "react";

function Header() {
  return (
    <div className="fixed w-full">
      <div className="p-1 text-center text-white bg-red-500 font-semibold">
        DISCLAIMER: This is a personal project only! Check out the original
        website here{" "}
        <a href="https://www.branchfurniture.ca" className="font-bold underline text-black" target="_blank">
          https://www.branchfurniture.ca
        </a>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Header;
