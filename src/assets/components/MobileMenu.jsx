import React from "react";

function MobileMenu({ isNavOpen }) {
  const mobileLinks = [
    "Chairs",
    "Desks",
    "Accessories",
    "Workplace",
    "Bundles",
    "Sale",
  ];
  return (
    <div
      className={`absolute flex-col lg:hidden w-full h-screen bg-white -left-[1000px] ${
        isNavOpen && "left-0"
      } transition-all duration-300`}
    >
      <div className="focus-within:ring-2 ring-main-green w-full h-12 bg-[#F5F6F5] flex items-center px-10 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#314438"
          className="w-6 h-6 mr-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          name=""
          id=""
          className="peer w-full h-full bg-transparent text-xl outline-none"
        />
      </div>
      <ul className="px-10 flex flex-col select-none lg:hidden">
        {mobileLinks.map((link, id) => {
          return (
            <li
              key={id}
              className="py-3 font-frank capitalize text-4xl text-main-green font-thin flex items-center justify-between"
            >
              {link}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
          );
        })}
        <li className="py-3 capitalize text-xl font-quicksand text-main-green flex items-center justify-between">
          Resources
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </li>
        <li className="py-3 capitalize text-xl font-quicksand text-main-green flex items-center justify-between">
          For business
        </li>
      </ul>
      <div className="w-full px-10">
        <button className="w-full h-14 bg-main-green font-semibold text-sm text-white uppercase mx-auto">
          Build Your Office
        </button>
      </div>

      <div className="w-full px-10 flex items-center justify-between mt-10">
        <div className="flex gap-4">
          <div className="w-7 h-7">
            <svg
              aria-hidden="true"
              tabindex="-1"
              role="presentation"
              className=" icon icon-instagram"
              viewBox="0 0 32 32"
            >
              <path
                fill="#314438"
                d="M16 2.66669C19.6226 2.66669 20.0746 2.68002 21.496 2.74669C22.916 2.81335 23.8826 3.03602 24.7333 3.36669C25.6133 3.70535 26.3546 4.16402 27.096 4.90402C27.774 5.57055 28.2986 6.37681 28.6333 7.26669C28.9626 8.11602 29.1866 9.08402 29.2533 10.504C29.316 11.9254 29.3333 12.3774 29.3333 16C29.3333 19.6227 29.32 20.0747 29.2533 21.496C29.1866 22.916 28.9626 23.8827 28.6333 24.7334C28.2995 25.6237 27.7748 26.4302 27.096 27.096C26.4292 27.7738 25.623 28.2984 24.7333 28.6334C23.884 28.9627 22.916 29.1867 21.496 29.2534C20.0746 29.316 19.6226 29.3334 16 29.3334C12.3773 29.3334 11.9253 29.32 10.504 29.2534C9.08396 29.1867 8.11729 28.9627 7.26663 28.6334C6.37639 28.2993 5.57 27.7746 4.90396 27.096C4.22583 26.4296 3.7012 25.6233 3.36663 24.7334C3.03596 23.884 2.81329 22.916 2.74663 21.496C2.68396 20.0747 2.66663 19.6227 2.66663 16C2.66663 12.3774 2.67996 11.9254 2.74663 10.504C2.81329 9.08269 3.03596 8.11735 3.36663 7.26669C3.70027 6.37626 4.22503 5.56978 4.90396 4.90402C5.57019 4.22566 6.37653 3.70099 7.26663 3.36669C8.11729 3.03602 9.08263 2.81335 10.504 2.74669C11.9253 2.68402 12.3773 2.66669 16 2.66669ZM16 9.33335C14.2318 9.33335 12.5362 10.0357 11.2859 11.286C10.0357 12.5362 9.33329 14.2319 9.33329 16C9.33329 17.7681 10.0357 19.4638 11.2859 20.7141C12.5362 21.9643 14.2318 22.6667 16 22.6667C17.7681 22.6667 19.4638 21.9643 20.714 20.7141C21.9642 19.4638 22.6666 17.7681 22.6666 16C22.6666 14.2319 21.9642 12.5362 20.714 11.286C19.4638 10.0357 17.7681 9.33335 16 9.33335V9.33335ZM24.6666 9.00002C24.6666 8.55799 24.491 8.13407 24.1785 7.82151C23.8659 7.50895 23.442 7.33335 23 7.33335C22.5579 7.33335 22.134 7.50895 21.8214 7.82151C21.5089 8.13407 21.3333 8.55799 21.3333 9.00002C21.3333 9.44205 21.5089 9.86597 21.8214 10.1785C22.134 10.4911 22.5579 10.6667 23 10.6667C23.442 10.6667 23.8659 10.4911 24.1785 10.1785C24.491 9.86597 24.6666 9.44205 24.6666 9.00002ZM16 12C17.0608 12 18.0782 12.4214 18.8284 13.1716C19.5785 13.9217 20 14.9392 20 16C20 17.0609 19.5785 18.0783 18.8284 18.8284C18.0782 19.5786 17.0608 20 16 20C14.9391 20 13.9217 19.5786 13.1715 18.8284C12.4214 18.0783 12 17.0609 12 16C12 14.9392 12.4214 13.9217 13.1715 13.1716C13.9217 12.4214 14.9391 12 16 12V12Z"
              ></path>
            </svg>
          </div>
          <div className="w-7 h-7">
            <svg
              aria-hidden="true"
              tabindex="-1"
              role="presentation"
              className=" icon icon-twitter"
              viewBox="0 0 32 32"
            >
              <path
                fill="#314438"
                d="M29.833,7.414c-1.02,0.451-2.11,0.755-3.259,0.896c1.186-0.709,2.073-1.826,2.497-3.141 c-1.114,0.663-2.333,1.128-3.605,1.377c-1.071-1.148-2.573-1.8-4.144-1.8c-3.51,0-6.26,3.066-5.528,6.975 c-4.566-0.226-8.821-2.385-11.699-5.938c-1.505,2.598-0.733,5.918,1.764,7.585c-0.938-0.023-1.817-0.281-2.579-0.708v0.07 c0,2.703,1.905,5.032,4.554,5.568c-0.487,0.131-0.99,0.198-1.495,0.198c-0.364,0-0.721-0.035-1.067-0.105 c0.743,2.313,2.875,3.899,5.304,3.944c-2.377,1.87-5.403,2.716-8.406,2.351c2.584,1.683,5.603,2.575,8.687,2.568 c10.451,0,16.393-8.629,16.142-16.899c1.11-0.805,2.07-1.801,2.831-2.942L29.833,7.414z"
              ></path>
            </svg>
          </div>
          <div className="w-7 h-7">
            <svg
              aria-hidden="true"
              tabindex="-1"
              role="presentation"
              className=" icon icon-linkedin"
              viewBox="0 0 32 32"
            >
              <path
                fill="#314438"
                d="M10.132,26.622H5.726V12.438h4.406V26.622z M7.926,10.503c-1.408,0-2.551-1.166-2.551-2.574c0-1.41,1.143-2.552,2.551-2.552 c1.409,0,2.551,1.142,2.551,2.552C10.478,9.337,9.335,10.503,7.926,10.503z M26.619,26.622h-4.396v-6.903 c0-1.647-0.034-3.756-2.289-3.756c-2.291,0-2.643,1.788-2.643,3.637v7.022h-4.4V12.438h4.225v1.935h0.061 c0.588-1.114,2.024-2.291,4.169-2.291c4.458,0,5.278,2.935,5.278,6.748v7.791H26.619L26.619,26.622z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
