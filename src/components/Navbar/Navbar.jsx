import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="absolute top-0 z-50 w-full bg-gradient-to-r from-gray-400/40 to-gray-50/20">
      <header className="z-50 flex flex-wrap w-full text-sm bg-transparent sm:justify-start sm:flex-nowrap sm:py-0">
        <nav
          className="relative max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between bg-[#000000]">
            <div className="flex items-center justify-between gap-3 bg-[#242020] w-max h-full px-5 py-2.5 lg:px-8 lg:py-5">
              <h1 className="text-2xl font-bold lg:text-5xl text-primary ">
                DubaiBD
              </h1>
            </div>
            <div className="flex items-center py-4 mr-3 sm:hidden">
              {/* mobile call info */}
              <div className="flex items-center gap-3 pr-4 text-white">
                <div className="w-10 h-10 p-2 bg-white rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.05 5C16.0267 5.19057 16.9244 5.66826 17.6281 6.37194C18.3317 7.07561 18.8094 7.97326 19 8.95M15.05 1C17.0793 1.22544 18.9716 2.13417 20.4162 3.57701C21.8609 5.01984 22.772 6.91101 23 8.94M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                      stroke="#B98E75"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="space-y-1 text-start lg:space-y-2">
                  <h1 className=" text-sm xl:text-[22px] font-medium">
                    Call Anytime
                  </h1>
                  <p className="text-xs xl:text-base">+0987654321</p>
                </div>
              </div>
              <button
                type="button"
                className="flex items-center justify-center text-sm font-semibold text-white rounded-lg hs-collapse-toggle w-9 h-9 gap-x-2 hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={toggleDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M3.57031 12H21.5703"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.57031 6H21.5703"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.57031 18H21.5703"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className="flex-shrink-0 hidden w-4 h-4 hs-collapse-open:block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className={`hs-collapse ${
              isDropdownOpen ? "" : "hidden"
            } overflow-hidden transition-all duration-300 basis-full grow sm:block`}
          >
            <div className="flex flex-col gap-y-8 gap-x-0 sm:flex-row sm:items-center sm:justify-end text-end sm:gap-y-0 sm:gap-x-3 lg:gap-x-7 sm:mt-0 sm:ps-7 bg-gradient-to-r from-[#10106cae] to-[#07074D] md:bg-gradient-to-t md:from-transparent md:to-transparent ">
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className="flex items-center justify-end pr-10 md:pr-0 pt-8 md:pt-0 w-full text-white font-medium text-4 xl:text-[22px]"
                >
                  Home
                  <svg
                    className="flex-shrink-0 w-4 h-4 ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className="flex items-center w-full justify-end pr-10 md:pr-0 text-white font-medium text-4 xl:text-[22px]"
                >
                  Service
                  <svg
                    className="flex-shrink-0 w-4 h-4 ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className="flex items-center w-full justify-end pr-10 md:pr-0 text-white font-medium text-4 xl:text-[22px]"
                >
                  Portfolio
                  <svg
                    className="flex-shrink-0 w-4 h-4 ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className="flex items-center w-full justify-end pr-10 md:pr-0 text-white font-medium text-4 xl:text-[22px]"
                >
                  Pages
                  <svg
                    className="flex-shrink-0 w-4 h-4 ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className="flex items-center w-full justify-end pr-10 md:pr-0 text-white font-medium text-4 xl:text-[22px]"
                >
                  Blog
                  <svg
                    className="flex-shrink-0 w-4 h-4 ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className="flex items-center w-full justify-end pr-14 md:pr-0 text-white font-medium text-4 xl:text-[22px]"
                >
                  Contact
                </button>
              </div>
              <div>
                {/* Call Info */}
                <div className="items-center hidden gap-3 pl-2 text-white sm:flex xl:pl-5">
                  <div className="p-2 bg-white rounded-full h-7 w-7 xl:h-10 xl:w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M15.05 5C16.0267 5.19057 16.9244 5.66826 17.6281 6.37194C18.3317 7.07561 18.8094 7.97326 19 8.95M15.05 1C17.0793 1.22544 18.9716 2.13417 20.4162 3.57701C21.8609 5.01984 22.772 6.91101 23 8.94M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                        stroke="#B98E75"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1 text-start lg:space-y-2">
                    <h1 className=" text-sm xl:text-[22px] font-medium">
                      Call Anytime
                    </h1>
                    <p className="text-xs xl:text-base">+0987654321</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="h-[1px] bg-gradient-to-r from-gray-700 to-gray-100"></div>
    </div>
  );
};

export default Navbar;
