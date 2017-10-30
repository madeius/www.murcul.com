import React from "react";
import logoSrc from "../../assets/logo-inverted.png";
import styled from "styled-components";

const NavBar = styled.section`
  width: 100%;
  height: 60px;
  padding-top: 20px;
  display: flex;
`;

const NavBarLogo = styled.img`
  height: 100%;
  margin-right: 20%;
`;

const NavBarItem = styled.a`
  height: 100%;
  display: flex;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
`;

export default function Header() {
  return (
    <NavBar>
      <NavBarLogo src={logoSrc} />
      <NavBarItem>About</NavBarItem>
      <NavBarItem>Contact</NavBarItem>
      <NavBarItem>Blog</NavBarItem>
    </NavBar>
  );
}
