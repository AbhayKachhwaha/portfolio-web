import React from "react";
import { Navbar, Nav, Icon } from "rsuite";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <Navbar appearance={"inverse"}>
      <Navbar.Header>
        <h1>Logo</h1>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
          <Nav.Item >About</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Navigation;
