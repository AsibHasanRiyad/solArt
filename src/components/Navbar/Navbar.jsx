import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className=" absolute top-0 z-50 w-full bg-gradient-to-r from-gray-400/40 to-gray-50/20">
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-transparent text-sm sm:py-0">
        <nav
          className="relative max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between bg-[#2D2D36]">
            <div className="flex items-center justify-between gap-3 bg-[#2D2D36] w-max h-full px-8 py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 167 167"
                fill="none"
                className=" h-9 w-9 lg:h-[69px] lg:w-[69px]"
              >
                <path
                  d="M61.5263 30.7632C61.5263 47.7532 47.7532 61.5263 30.7632 61.5263C13.7731 61.5263 0 47.7532 0 30.7632C0 13.7731 13.7731 4.26125e-06 30.7632 4.26125e-06C47.7532 4.26125e-06 61.5263 13.7731 61.5263 30.7632Z"
                  fill="#B98E75"
                />
                <path
                  d="M131.842 101.079C131.842 118.069 118.069 131.842 101.079 131.842C84.0889 131.842 70.3158 118.069 70.3158 101.079C70.3158 84.0889 84.0889 70.3158 101.079 70.3158C118.069 70.3158 131.842 84.0889 131.842 101.079Z"
                  fill="#B98E75"
                />
                <path
                  d="M0 70.3158H30.7632C47.7532 70.3158 61.5263 84.0889 61.5263 101.079V167H30.7632C13.7731 167 0 153.227 0 136.237V70.3158Z"
                  fill="#B98E75"
                />
                <path
                  d="M70.3158 61.5263V30.7632C70.3158 13.7731 84.0889 3.62416e-06 101.079 2.8815e-06L167 0V30.7632C167 47.7532 153.227 61.5263 136.237 61.5263L70.3158 61.5263Z"
                  fill="#B98E75"
                />
              </svg>
              <h1 className=" text-2xl lg:text-5xl font-bold text-white">
                SolArt
              </h1>
            </div>
            <div className="sm:hidden mr-3">
              <button
                type="button"
                className="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.57031 6H21.5703"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.57031 18H21.5703"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
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
                    className="flex-shrink-0 ms-2 w-4 h-4"
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
                    className="flex-shrink-0 ms-2 w-4 h-4"
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
                  Project
                  <svg
                    className="flex-shrink-0 ms-2 w-4 h-4"
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
                    className="flex-shrink-0 ms-2 w-4 h-4"
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
                  News
                  <svg
                    className="flex-shrink-0 ms-2 w-4 h-4"
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
                  Contact
                  <svg
                    className="flex-shrink-0 ms-2 w-4 h-4"
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
              <a
                className="flex items-center gap-x-2 font-medium text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6"
                href="#"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
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
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Log in
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="h-[1px] bg-gradient-to-r from-gray-700 to-gray-100"></div>
    </div>
  );
};

export default Navbar;
