import React from "react";
import logoSrc from "../../assets/logo-inverted.png";
import styled from "styled-components";

const NavBar = styled.section`
  width: 100%;
  height: 2em;
  margin-top: 20px;
  display: flex;
`;

const NavBarLogo = styled.img`height: 100%;`;

const NavBarLogoGroup = styled.div`height: 100%;`;

const NavBarItem = styled.a`
  height: 100%;
  text-decoration: none;
  color: white;
  justify-content: center;
  align-items: center;
  margin-left: 80px;
  cursor: pointer;
  margin-right: 60px;
`;

const NavBarItemGroup = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

export default function Header() {
  return (
    <NavBar>
      <NavBarLogoGroup>
        <NavBarLogo src={logoSrc} />
      </NavBarLogoGroup>
      <NavBarItemGroup>
        <NavBarItem href="https://medium.com/@murcul" target="_blank">
          Blog
        </NavBarItem>
      </NavBarItemGroup>
    </NavBar>
  );
}
