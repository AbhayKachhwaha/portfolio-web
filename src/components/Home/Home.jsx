import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import InfoSection from "../InfoSection/InfoSection";
import { infodata } from "../InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <HeroSection />
      {infodata.map((data)=>{
        return <InfoSection {...data}/>
      })}
      
    </>
  );
};

export default Home;