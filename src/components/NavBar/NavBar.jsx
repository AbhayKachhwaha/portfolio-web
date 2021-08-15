import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
} from "./NavbarElements";
import { animateScroll } from "react-scroll";
import logo from "../../images/logo.png";
import Image from '../Image/Image';

export const NavBar = ({ toggle }) => {

  const reload = () => {
    window.location.reload();
    animateScroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo onClick={reload}>
            Abhay
            <Image src={logo} alt="logo" height="100"/>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                onClick={animateScroll.scrollToTop}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Portfolio
              </NavLinks>
            </NavItem>
            <NavBtnLink to="/contactus">Contact Us</NavBtnLink>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
