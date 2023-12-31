import Title from "../../shared/Title";

const FeedBack = () => {
  return (
    <div className=" pb-[120px]">
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
          <img src="https://i.ibb.co/xLL1xff/Rectangle-587.png" alt="" />

                  {/* What our client says  card*/}
        <div className=" absolute top-52 right-16 max-w-[440px] bg-white text-center py-9 shadow-lg shadow-gray-300">
          <h1 className=" text-[22px] font-medium text-heading pb-3">
            WHAT CLIENT&apos;S SAY?
          </h1>
          <div className=" h-[1px] bg-primary w-full"></div>
          <p className=" mt-2 mb-14 text-base text-paragraph text-center">
            Lorem ipsum dolor sit amet consectetur. Elit ac vel nec augue
            pharetra lectus duis. Nullam dignissim pretium egestas non turpis
            turpis purus lobortis.
          </p>

          {/* client info */}
          <div className=" flex flex-col items-center justify-center">
            <img src="https://i.ibb.co/nfbsZRY/Ellipse-88.png" alt="" />
            <h1 className=" text-[22px] font-medium text-heading">
              Johan Smith
            </h1>
            <p className=" text-paragraph">Manager Of Alco. LTD</p>
            {/* dot */}
            <div className=" pt-8">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="18"
            viewBox="0 0 60 18"
            fill="none"
          >
            <circle cx="30" cy="8.99975" r="3.44262" fill="#D5D2DA" />
            <circle cx="56.5574" cy="8.99975" r="3.44262" fill="#D5D2DA" />
            <circle cx="3.44262" cy="8.99975" r="3.44262" fill="#D5D2DA" />
            <circle cx="29.9999" cy="8.99992" r="8.35246" stroke="#B98E75" />
          </svg>
            </div>
          </div>
          
        </div>
        </div>

      </div>
    </div>
  );
};

export default FeedBack;
