
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import MeetOurTeam from "./components/MeetOurTeam/MeetOurTeam";
import Navbar from "./components/Navbar/Navbar";
import OurService from "./components/OurService/OurService";
import WhatWeDone from "./components/WhatWeDone/WhatWeDone";

const App = () => {
  return (
      <div className=" max-w-[1440px] mx-auto overflow-hidden">
        <Navbar />
        <Banner />
        <OurService />
        <About />
        <MeetOurTeam />
        <WhatWeDone />
        <Footer />
      </div>
  );
};

export default App;
