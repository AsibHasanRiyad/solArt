
import './styles/Style.css'
const Stats = () => {
    return (
        <div className=" bg-primary text-white grid grid-cols-2 lg:grid-cols-4 gap-10 py-[90px] lg:py-[120px] mb-[120px]">
            <div className=" text-center">
                <h1 className=" text-[38px] md:text-[60px] font-bold text-stroke text-[#D5D2DA] ">300</h1>
                <p className=" text-[22px] md:text-[28px] font-medium">Projects Succeed</p>
            </div>
            <div className=" text-center">
                <h1 className="text-[38px] md:text-[60px] font-bold text-stroke text-[#D5D2DA] ">500</h1>
                <p className=" text-[22px] md:text-[28px] font-medium">Satisfied Clients</p>
            </div>
            <div className=" text-center">
                <h1 className="text-[38px] md:text-[60px] font-bold text-stroke text-[#D5D2DA] ">60</h1>
                <p className=" text-[22px] md:text-[28px] font-medium">Professional Engineers</p>
            </div>
            <div className=" text-center">
                <h1 className="text-[38px] md:text-[60px] font-bold text-stroke text-[#D5D2DA] ">10</h1>
                <p className=" text-[22px] md:text-[28px] font-medium">Year Of Experience</p>
            </div>
        </div>
    );
};

export default Stats;