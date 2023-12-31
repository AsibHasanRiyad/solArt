import "./styles/Style.css";
const Stats = () => {
  return (
    <div className=" relative">
      <div className=" bg-primary text-white grid grid-cols-2 lg:grid-cols-4 gap-10 py-[90px] lg:py-[120px] mb-[120px]">
        <div className=" text-center">
          <h1 className=" text-[38px] md:text-[60px] font-bold text-stroke text-[#D5D2DA] ">
            300
          </h1>
          <p className=" text-[22px] md:text-[28px] font-medium">
            Projects Succeed
          </p>
        </div>
        <div className=" text-center">
          <h1 className="text-[38px] md:text-[60px] font-bold text-stroke text-[#D5D2DA] ">
            500
          </h1>
          <p className=" text-[22px] md:text-[28px] font-medium">
            Satisfied Clients
          </p>
        </div>
        <div className=" text-center">
          <h1 className="text-[38px] md:text-[60px] font-bold text-stroke text-[#D5D2DA] ">
            60
          </h1>
          <p className=" text-[22px] md:text-[28px] font-medium">
            Professional Engineers
          </p>
        </div>
        <div className=" text-center">
          <h1 className="text-[38px] md:text-[60px] font-bold text-stroke text-[#D5D2DA] ">
            10
          </h1>
          <p className=" text-[22px] md:text-[28px] font-medium">
            Year Of Experience
          </p>
        </div>
      </div>
      {/* svg */}
      <div className=" w-full px-10 mx-auto flex items-center">
        {/* Large device svg */}
        <div className="hidden lg:block absolute top-7">
          <svg
            width="1348"
            height="347"
            viewBox="0 0 1348 347"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              opacity="0.2"
              d="M124.458 28.3052L93.4632 20.0002L85 51.5852L124.458 28.3052Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M1344.46 293.305L1313.46 285L1305 316.585L1344.46 293.305Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M741 0.541504L764 23.5416L787.541 0.000319499L741 0.541504Z"
              fill="white"
            />
            <path
              opacity="0.3"
              d="M20.5171 140.511C83.6584 183.3 241.67 265.188 368.586 250.427C527.23 231.976 675.498 63.1694 787.776 96.7676C900.054 130.366 929.874 329.884 1064.02 300.921C1198.16 271.959 1221.4 70.9742 1338.7 32.1938"
              stroke="white"
              stroke-width="4"
              stroke-dasharray="8 8"
            />
            <circle
              cx="12.4162"
              cy="134.36"
              r="12"
              transform="rotate(-0.807862 12.4162 134.36)"
              fill="white"
            />
            <circle
              cx="1335.42"
              cy="32.3599"
              r="12"
              transform="rotate(-0.807862 1335.42 32.3599)"
              fill="white"
            />
            <rect
              opacity="0.1"
              x="272"
              y="15"
              width="154"
              height="154"
              fill="url(#pattern0)"
            />
            <rect
              opacity="0.1"
              x="907"
              y="147"
              width="200"
              height="200"
              fill="url(#pattern1)"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlink:href="#image0_0_1" transform="scale(0.00195312)" />
              </pattern>
              <pattern
                id="pattern1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlink:href="#image1_0_1" transform="scale(0.005)" />
              </pattern>
              <image
                id="image0_0_1"
                width="512"
                height="512"
                xlink:href="data:image/png;base64,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"
              />
              <image
                id="image1_0_1"
                width="200"
                height="200"
                xlink:href="data:image/png;base64,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O/dVUT7rpzofwgrsvkzuivKm1bnNiXtFHpWuDcl3ztctg8234c6HZOIcbOK6Tdoccy82TDd3RQsQKb9R4Ja8ExFXkQPkKfzNFzWesH/PUqy7RJYmEs4NvJj2N9h6sSntK8PtjGC9bqHzJAulVeQAORub6Ey6dwnd1+OeJwyQZ9sdGJgK7NzltXrh9X5ZkQNEim+a8/jkYMtTnF7FiehGofRiat4JaLJp50OSUQ4ivfgHNrQBrM7YbpSgL1sR5hyPpH1yBYj0wq28n0HYGztLfwJ2Dx6nPmCqaEUs9w9cnlsqysNtnevUbVxa8BEgbo/csQlf636IT6eQlqpb6DxO0t0dGj+7ygaXjwB51Hm8C7CZh2uIXzsRfm4vE697SCn5CJCnCWctWQe4gWy6Ukg6dgSud57/Gn83MgvPVyX9ZOBOrPPhbljrwnw6D6F1B+acB5zmI3EV4naKnIAtitnOeOA1zvOVwNfTTlQ/8RUgd2NTx1xMOFHZdgnPMa3zIZLAIFbkjWsl8H5svjLx5M3AHbSe3kdbMbdV2Jj917X4PJsd5bxmeodjfTknSMMi4s2flUhWawNOxBZsjJodo25L7JsrtxWFSmY84SyFL9LYqtXKKmzd+iRzCewcHP9opwM9GYNN9/Nvsl+MVURERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERkLf8H+fh5UghXyH4AAAAASUVORK5CYII="
              />
            </defs>
          </svg>
        </div>
        {/* for mobile and tablet */}
        <div className=" block lg:hidden w-[430px] md:w-[800px] absolute top-8 left-0 ">
          <svg
            // height="344"
            viewBox="0 0 390 344"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M-37.1415 72.9856C-14.0802 88.6135 43.6306 118.522 89.9842 113.13C147.926 106.391 202.078 44.7381 243.086 57.0092C284.093 69.2803 294.984 142.151 343.978 131.573C392.972 120.995 401.459 47.5887 444.299 33.4248"
              stroke="white"
              stroke-width="2"
              stroke-dasharray="8 8"
            />
            <path
              opacity="0.3"
              d="M-36.5711 221.841C-13.5099 237.468 44.2009 267.377 90.5545 261.985C148.497 255.246 202.649 193.593 243.656 205.864C284.664 218.135 295.555 291.006 344.548 280.428C393.542 269.849 402.029 196.444 444.869 182.28"
              stroke="white"
              stroke-width="2"
              stroke-dasharray="8 8"
            />
            <path
              opacity="0.2"
              d="M59.9033 26.3755L74.8544 15.3028L63.5212 -6.64363e-05L59.9033 26.3755Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M330.57 9.52148L339.873 25.6337L356.364 16.1124L330.57 9.52148Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M326.191 332.13L310.779 328L306.57 343.706L326.191 332.13Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Stats;
