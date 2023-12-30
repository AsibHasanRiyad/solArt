/* eslint-disable react/prop-types */
const Title = ({title, heading1, heading2}) => {
  return (
    <div className=" text-heading">
        <div className=" flex gap-4 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="108"
        height="10"
        viewBox="0 0 108 10"
        fill="none"
      >
        <rect y="0.5" width="88" height="3" fill="#B98E75" />
        <rect x="20" y="6.5" width="88" height="3" fill="#B98E75" />
      </svg>
      <h1 className=" text-[28px] font-semibold">{title}</h1>
    </div>
    {/* heading */}
    <div className=" space-y-3 mt-3 text-heading ">
        <h1 className=" text-4xl font-bold">
        {heading1}
        </h1>
        <h1 className=" text-4xl font-bold">
        {heading2}
        </h1>
    </div>
    </div>
  );
};

export default Title;
