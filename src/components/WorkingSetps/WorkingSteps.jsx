import Number from "../../shared/Number";
import Title from "../../shared/Title";

const WorkingSteps = () => {
  return (
    <div className=" bg-paragraph  px-4 md:px-14 xl:px-[70px] pt-9 pb-16 mb-14 lg:mb-[120px]">
      {/* title */}
      <div className=" flex justify-end">
        <Title
          title={"How We Works"}
          heading1={"Our Easy Working Steps "}
          heading2={"To Do Start A Project"}
          color={"text-white"}
        />
      </div>
      {/* steps */}
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-14 text-center pt-8 md:pt-20">
        <div className=" flex flex-col items-center space-y-3">
          <div className=" relative">
            <img
              className=" w-[72px] md:w-[142px]"
              src="https://i.ibb.co/VH2r4sx/Work-Step-Option.png"
              alt=""
            />
            <div className=" absolute -left-5 -top-5 md:-left-12 md:-top-12">
              <Number number={"01"} />
            </div>
          </div>
          <h1 className=" text-[28px] font-medium text-primary">
            Visit Project
          </h1>
          <p className=" text-[14px] text-white">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget
            laoreet volutpat egestas posuere urna phasellus.
          </p>
        </div>
        {/*  2*/}
        <div className=" flex flex-col items-center space-y-3 mt-8 md:mt-0">
          <div className=" relative">
            <img
              className=" w-[72px] md:w-[142px]"
              src="https://i.ibb.co/1dt1fwZ/Work-Step-Option-1.png"
              alt=""
            />
            <div className=" absolute -left-5 -top-5 md:-left-12 md:-top-12">
              <Number number={"02"} />
            </div>
          </div>
          <h1 className=" text-[28px] font-medium text-primary">
            Planning Design
          </h1>
          <p className=" text-[14px] text-white">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget
            laoreet volutpat egestas posuere urna phasellus.
          </p>
        </div>
        {/* 3 */}
        <div className=" flex flex-col items-center space-y-3">
          <div className=" relative">
            <img
              className=" w-[72px] md:w-[142px]"
              src="https://i.ibb.co/M6RndKf/Work-Step-Option-2.png"
              alt=""
            />
            <div className=" absolute -left-5 -top-5 md:-left-12 md:-top-12">
              <Number number={"03"} />
            </div>
          </div>
          <h1 className=" text-[28px] font-medium text-primary">
            Project Sketch
          </h1>
          <p className=" text-[14px] text-white">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget
            laoreet volutpat egestas posuere urna phasellus.
          </p>
        </div>
        {/* 4 */}
        <div className=" flex flex-col items-center space-y-3 mt-8 md:mt-0">
          <div className=" relative">
            <img
              className=" w-[72px] md:w-[142px]"
              src="https://i.ibb.co/7N09nNJ/Work-Step-Option-3.png"
              alt=""
            />
            <div className=" absolute -left-5 -top-5 md:-left-12 md:-top-12">
              <Number number={"04"} />
            </div>
          </div>
          <h1 className=" text-[28px] font-medium text-primary">
            Start Working
          </h1>
          <p className=" text-[14px] text-white">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget
            laoreet volutpat egestas posuere urna phasellus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkingSteps;
