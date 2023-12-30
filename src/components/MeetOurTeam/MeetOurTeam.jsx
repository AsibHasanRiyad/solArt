import Title from "../../shared/Title";

const MeetOurTeam = () => {
  return (
    <div className="px-4 md:px-14 xl:px-[70px] pb-[180px]">
      <div>
        <Title
          title={"Meet Our Team"}
          heading1={"Let's See Our Expert"}
          heading2={"Engineer & Designer"}
        />
      </div>
      {/* member image */}
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <img src="https://i.ibb.co/2cj4p63/Team-Card-3.png" alt="" />
        <img src="https://i.ibb.co/h7JksvJ/Team-Card-2.png" alt="" />
        <img src="https://i.ibb.co/jH7H03s/Team-Card.png" alt="" />
        <img src="https://i.ibb.co/vX2Djxk/Team-Card-4.png" alt="" />
      </div>
    </div>
  );
};

export default MeetOurTeam;
