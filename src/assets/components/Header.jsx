import React, { useState } from "react";

import branchLogo from "../images/branch-logo.png";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const links = [
    "Shop by",
    "Chair",
    "Desks",
    "Accessories",
    "Workplace",
    "Bundles",
    "Sale",
  ];

  return (
    <div className="sticky top-0 w-full bg-white z-50">
      {/* DISCLAIMER */}
      <div className="p-1 text-center text-white bg-main-green font-semibold font-sans">
          DISCLAIMER: This is a personal project only! Check out the original
          website here{" "}
          <a
            href="https://www.branchfurniture.ca"
            className="font-bold underline text-accent tracking-wider"
            target="_blank"
          >
            https://www.branchfurniture.ca
          </a>
      </div>

      {/* HEADER */}
      <div className="border-b border-[#c6cbc8] lg:px-10  flex items-center justify-between">
        <div className="flex items-center w-full justify-between">
          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between w-full p-4 lg:hidden">
            <div className="flex">
              <button
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                  // alert(isNavOpen);
                }}
                className="mr-4"
              >
                {isNavOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 flex lg:hidden"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
              <a href="/">
                <img
                  src={branchLogo}
                  alt="Branch Logo"
                  width={120}
                  className="mr-10"
                />
              </a>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>

          {/* DESKTOP HEADER */}
          <div className="lg:flex items-center justify-between w-full hidden select-none">
            <div className="flex items-center">
              <a href="/">
                <img
                  src={branchLogo}
                  alt="Branch Logo"
                  width={130}
                  className="mr-10"
                />
              </a>
              <ul className="flex flex-row">
                {links.map((link, id) => {
                  return (
                    <li
                      key={id}
                      className="py-5 border-white hover:border-accent border-b-4 mx-2 px-2 uppercase text-main-green font-semibold cursor-pointer last:text-text-brown"
                    >
                      {link}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="p-1 lg:flex hidden">
              <button className="mr-5 text-white uppercase font-semibold py-1 px-2 text-sm bg-main-green hover:ring-2 ring-main-green hover:bg-white hover:text-main-green">
                Design my office
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu isNavOpen={isNavOpen} />
    </div>
  );
}

export default Header;
