
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MeetOurTeam from "./components/MeetOurTeam/MeetOurTeam";
import Navbar from "./components/Navbar/Navbar";
import OurService from "./components/OurService/OurService";
import Stats from "./components/Stats/Stats";
import WhatWeDone from "./components/WhatWeDone/WhatWeDone";
import WorkingSteps from "./components/WorkingSetps/WorkingSteps";

const App = () => {
  return (
      <div className=" max-w-[1440px] mx-auto overflow-hidden">
        <Navbar />
        <Banner />
        <OurService />
        <About />
        <WorkingSteps />
        <MeetOurTeam />
        <WhatWeDone />
        <Stats />
        <Contact />
        <Footer />
      </div>
  );
};

export default App;
