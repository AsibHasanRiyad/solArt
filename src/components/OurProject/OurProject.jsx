import Title from "../../shared/Title";

// https://i.ibb.co/xmDHmVy/Untitled-design-2-4.jpg
// https://i.ibb.co/ctM1YX9/Untitled-design-2-3.jpg
// https://i.ibb.co/YXN7zNP/Untitled-design-2-2.jpg

const OurProject = () => {
    return (
        <div className="px-4 md:px-14 xl:px-[70px] my-[46px] lg:my-[120px]">
            <div>
                <Title title={'Our Project'} heading1={"Our Outstanding Latest "} heading2={"Projects & Work"} />
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 mt-10">
                {/* image 1 */}
                <div className=" relative">
                    <img className=" w-[284px] md:w-[384px] lg:w-[589px] " src="https://i.ibb.co/GFdzJsQ/Untitled-design-2.jpg" alt="" />
                    <div className=" absolute top-10 right-2 md:-right-20 bg-[#252531] w-fit p-5">
                        <h1 className=" text-[22px] md:text-[28px] font-semibold text-primary">Architecture</h1>
                        <p className=" text-[14px] md:text-[22px] font-medium text-white">Bungalow Dark House</p>
                    </div>
                    <div className=" text-base font-normal md:text-[22px] md:font-medium right-1/2 md:right-28 xl:right-[200px] text-white absolute bottom-5">
                        <h1 className=" text-center" >Bungalow Dark House</h1>
                    </div>
                </div>
                {/* image 2 */}
                <div className=" relative">
                    <img className=" ml-28 md:ml-0 w-[284px] md:w-[384px] lg:w-[589px] " src="https://i.ibb.co/ctM1YX9/Untitled-design-2-3.jpg" alt="" />
                    <div className=" absolute bottom-28 left-2 md:-left-20 bg-[#252531] w-fit p-5">
                        <h1 className=" text-[22px]  md:text-[28px] font-semibold text-primary">Interior Design</h1>
                        <p className=" text-[14px] md:text-[22px] font-medium text-white max-w-44">Woodenist House Lumberjack</p>
                    </div>
                    <div className=" text-base font-normal md:text-[22px] md:font-medium right-10  md:right-28 xl:right-[200px] text-white absolute bottom-5">
                        <h1 className=" text-center" >Woodenist House Lumberjack</h1>
                    </div>
                </div>
                {/* image 3 */}
                <div className=" relative">
                    <img className=" w-[284px] md:w-[384px] lg:w-[589px] " src="https://i.ibb.co/HPTPJk6/2.jpg" alt="" />
                    <div className=" absolute top-10 right-2 md:-right-20 bg-[#252531] w-fit p-5">
                        <h1 className=" text-[22px] md:text-[28px] font-semibold text-primary">Home Decor</h1>
                        <p className=" text-[14px] md:text-[22px] font-medium text-white">Bungalow Dark House</p>
                    </div>
                    <div className=" text-base font-normal md:text-[22px] md:font-medium right-1/2 md:right-28 xl:right-[200px] text-white absolute bottom-5">
                        <h1 className=" text-center" >Bungalow Dark House</h1>
                    </div>
                </div>
                {/* image 4 */}
                <div className=" relative">
                    <img className=" ml-28 md:ml-0 w-[284px] md:w-[384px] lg:w-[589px] " src="https://i.ibb.co/bHtNkL0/1.jpg" alt="" />
                    <div className=" absolute bottom-28 left-2 md:-left-20 bg-[#252531] w-fit p-5">
                        <h1 className=" text-[22px]  md:text-[28px] font-semibold text-primary">Urban Design</h1>
                        <p className=" text-[14px] md:text-[22px] font-medium text-white max-w-44">Woodenist House Lumberjack</p>
                    </div>
                    <div className=" text-base font-normal md:text-[22px] md:font-medium right-10  md:right-28 xl:right-[200px] text-white absolute bottom-5">
                        <h1 className=" text-center" >Woodenist House Lumberjack</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurProject;