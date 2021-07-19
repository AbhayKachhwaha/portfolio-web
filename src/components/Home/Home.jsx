import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import InfoSection from "../InfoSection/InfoSection";
import { aboutdata } from "../InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...aboutdata}/>
    </>
  );
};

export default Home;
