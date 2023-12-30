
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import OurService from "./components/OurService/OurService";

const App = () => {
  return (
      <div className=" max-w-[1440px] mx-auto overflow-hidden">
        <Navbar />
        <Banner />
        <OurService />
        <About />
        <Footer />
      </div>
  );
};

export default App;
