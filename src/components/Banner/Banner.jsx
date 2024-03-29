const Banner = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center pl-4 md:pl-8 lg:pl-[70px]"
      style={{
        backgroundImage: `url('https://i.ibb.co/9cZC1Mm/Untitled-design.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white">
        <div className="flex items-center gap-4 text-5xl font-bold ">
          <div className="h-1 w-16 md:w-24 lg:w-32 bg-[#B98E75]"></div>
          <h1 className="text-4xl">#1</h1>
        </div>
        <div className=" text-[22px] md:text-4xl lg:text-6xl font-normal md:font-medium lg:font-bold my-3 lg:my-6 space-y-1 lg:space-y-6">
          <h1>WORLD CLASS DESIGN</h1>
          <h1>FOR YOUR INTERIOR SET-UP</h1>
        </div>
        <p className=" max-w-[265px] md:max-w-[465px] lg:max-w-[680px] text-justify">
          Lorem ipsum dolor sit amet consectetur. Id elementum libero vitae
          libero imperdiet in leo quis turpis. Enim aliquet lorem id etiam.Lorem
          ipsum dolor sit amet consectetur. Id elementum libero vitae libero
          imperdiet in leo quis turpis. Enim aliquet lorem id etiam.no of
        </p>
        {/* button */}
        <button className=" bg-[#B98E75] px-4 py-3 rounded-md text-lg font-medium mt-6">
          OUR PORTFOLIO
        </button>
      </div>
    </div>
  );
};

export default Banner;
