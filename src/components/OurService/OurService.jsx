import { useEffect, useState } from "react";
import Number from "../../shared/Number";
import Title from "../../shared/Title";

const OurService = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("cardData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="px-4 md:px-14 xl:px-[70px] my-[46px] lg:my-[120px]">
      <Title
        title={"Our Service"}
        color={'text-heading'}
        heading1={"We Provide Best  "}
        heading2={"Interior Design Services"}
      />
      {/* cards */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-12">
        {data?.map((card) => (
          <div key={data.number} className=" border-2 border-primary p-6">
            <div className=" flex items-start justify-between">
              <div className=" h-[108px] w-[108px] lg:w-[156px] lg:h-[156px] ">
                <img src={card?.imageSrc} alt="" />
              </div>
              <Number number={card?.number} />
            </div>
            <div>
              <h1 className=" text-heading font-semibold text-[28px] lg:text-5xl mt-5">
                {card?.title}
              </h1>
              <p className=" max-w-[350px] text-[14px] lg:text-base text-paragraph py-2 lg:py-5">
                Lorem ipsum dolor sit amet consectetur. Amet id non felis
                pretium consectetur id magna.
              </p>
              <button className=" bg-primary px-12 py-5 text-[18px] rounded-lg text-white ">
                Get Service
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
