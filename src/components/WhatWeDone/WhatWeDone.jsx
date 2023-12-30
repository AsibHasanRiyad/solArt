import Title from "../../shared/Title";

const WhatWeDone = () => {
  return (
    <div className="  pb-[120px] relative">
      <div className="px-4 md:px-14 xl:px-[70px]">
        <Title
          title={"What We Done"}
          color={"text-heading"}
          heading1={"Let's Have a Look What "}
          heading2={"We Have Done An Amazing Work!"}
        />
      </div>
      {/* image section */}
      <div
        className=" mt-10 py-[140px] lg:py-[240px] bg-gradient-to-r from-[#232358] to-transparent"
        style={{
          backgroundImage: `url('https://i.ibb.co/n6nLNk1/Untitled-design-1.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="px-4 md:px-14 xl:px-[70px]">
          <Title
            title={"Discover"}
            color={"text-white"}
            heading1={"ONE STONE HOUSE"}
          />
          <h1 className=" flex items-center gap-3 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className=" text-[28px] font-medium">Dhaka, Bangladesh</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDone;
