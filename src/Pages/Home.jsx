import React from "react";
import Navbar from "../Components/Navbar";
import Details from "../Components/Details";
import HomeImage from "../assets/homeimage.jpg";
import WelcomeSection from "./WelcomeSection";
import Blog from "./Blog";
import Video from "./Video";
import RecentNews from "./RecentNews";
import Footer from "./Footer";
import ThreeBox from "./ThreeBox";
import About from "./About";

const Home = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center min-h-screen relative"
        style={{ backgroundImage: `url(${HomeImage})` }}
      >
        {/* Content Overlay */}
        <div className="bg-black bg-opacity-60 min-h-screen">
          <div className="px-4 md:px-10 mb-2">
            <Details />
          </div>

          <Navbar />

          <WelcomeSection />
          <ThreeBox/>
        
        </div>
      </div>
      <About/>
      
      
      <Blog/>
      <Video/>
      
      <RecentNews/>

      <Footer/>
    
      
    </div>
  );
};

export default Home;
