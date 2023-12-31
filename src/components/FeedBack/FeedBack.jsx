import Title from "../../shared/Title";

const FeedBack = () => {
  return (
    <div className=" pb-[160px]">
      {/* Title */}
      <div className="px-4 md:px-14 xl:px-[70px]">
        <Title
          title={"Video & Feedback"}
          heading1={"Let's See The Video & "}
          heading2={"What Client Say About Our Project"}
        />
      </div>
      {/* main image div */}
      <div className=" pt-10">
        <div className=" relative">
          <img
            className=" min-h-[361px]"
            src="https://i.ibb.co/QNBgbrP/Untitled-design-1.jpg"
            alt=""
          />

          {/* What our client says  card*/}
          <div className=" absolute top-52 md:top-32 xl:top-52 right-8 lg:right-16 h-[243px] md:h-[350px] w-[243px] md:w-[350px] lg:h-fit lg:w-fit max-w-[440px] bg-white text-center py-2 md:py-9 shadow-lg shadow-gray-300">
            <h1 className=" text-base lg:text-[22px] font-medium text-heading pb-2 md:pb-3">
              WHAT CLIENT&apos;S SAY?
            </h1>
            <div className=" h-[1px] bg-primary w-full"></div>
            <p className=" hidden lg:block mt-2 mb-14 text-[14px] px-4 md:text-base text-paragraph text-center">
              Lorem ipsum dolor sit amet consectetur. Elit ac vel nec augue
              pharetra lectus duis. Nullam dignissim pretium egestas non turpis
              turpis purus lobortis.
            </p>
            <p className=" block lg:hidden mt-2 mb-4 text-[12px] px-4 md:px-0 md:text-base text-paragraph text-center">
              Lorem ipsum dolor sit amet consectetur. Elit ac vel nec augue
              pharetra lectus duis.
            </p>

            {/* client info */}
            <div className=" flex flex-col items-center justify-center">
              <img
                className=" w-[56px] md:w-[72px] h-[56px] md:h-[72px]"
                src="https://i.ibb.co/nfbsZRY/Ellipse-88.png"
                alt=""
              />
              <h1 className=" text-base lg:text-[22px] font-medium text-heading">
                Johan Smith
              </h1>
              <p className=" text-[14px] md:text-base text-paragraph">
                Manager Of Alco. LTD
              </p>
              {/* dot */}
              <div className=" pt-2 lg:pt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="18"
                  viewBox="0 0 60 18"
                  fill="none"
                >
                  <circle cx="30" cy="8.99975" r="3.44262" fill="#D5D2DA" />
                  <circle
                    cx="56.5574"
                    cy="8.99975"
                    r="3.44262"
                    fill="#D5D2DA"
                  />
                  <circle
                    cx="3.44262"
                    cy="8.99975"
                    r="3.44262"
                    fill="#D5D2DA"
                  />
                  <circle
                    cx="29.9999"
                    cy="8.99992"
                    r="8.35246"
                    stroke="#B98E75"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* view promo video */}
          <div className="absolute top-8 left-14 md:top-20 md:left-24 xl:top-36 xl:left-48 flex flex-col items-center justify-center">
            <div className="h-[62px] w-[62px] md:h-[100px] md:w-[100px]">
              <svg
                viewBox="0 0 114 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="57.0001" cy="57.0002" r="43.1818" fill="white" />
                <circle cx="57" cy="57.0001" r="49.5909" stroke="white" />
                <circle cx="57" cy="57" r="56.5" stroke="white" />
                <path
                  d="M49.2272 67.4326L69.0908 56.1362L49.2272 44.8398V67.4326Z"
                  stroke="#B98E75"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h1 className=" text-base lg:text-[22px] text-white font-normal md:font-medium ">
              VIEW PROMO VIDEO
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
