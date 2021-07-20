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

export const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            Abhay
            <img src={logo} alt="logo" height="100" width="120" />
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
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Portfolio
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
            <NavBtnLink to="/contactus">Contact Us</NavBtnLink>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
