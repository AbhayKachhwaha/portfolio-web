import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SideBarElements";
import { animateScroll } from "react-scroll";

const SideBar = ({ isOpen, toggle }) => {
  const onClickFunction = () => {
    toggle();
    animateScroll.scrollToTop();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="home"
            onClick={onClickFunction}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </SidebarLink>
          <SidebarLink
            to="about"
            onClick={toggle}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="portfolio"
            onClick={toggle}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Portfolio
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contactus">Contact Us</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
