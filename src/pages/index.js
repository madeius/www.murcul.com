// @flow
import styled from 'styled-components';
import React from "react";
import logoSrc from './images/logo.svg';
import styles from './styles.css';

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 100%;
  box-shadow: 0px 0px 35px #082AA3;
  position: relative;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
  width: 100%;
`;

const BrandImg = styled.img`
  height: 100%;
`;

const HeroSection = styled.section`
  background: linear-gradient(3.23deg, #1BABDA 2.17%, #3785ED 55.54%, #0465E7 89.32%), #C4C4C4;
  width: 100%;
  color: white;
  text-align: center;

  min-height: 300px;
`

const InfoSection = styled.section`
  backgrond-color: #F5F5F5;
  text-align: center;
  box-shadow: 0px 0px 35px #082AA3;
  position: relative;
  width: 100%;
  min-height: 300px;
`

const HeroDemo = styled.button`
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

const Footer = styled.footer`
  background-color: #0465E7;
  width: 100%;
  min-height: 100px;
  color: white;
`;

export default () => (
  <Page>
    <NavBar>
      <BrandImg src={logoSrc} />
    </NavBar>
    <HeroSection>
      <h1>I am Murcul. Hire me as your next frontend developer</h1>
      <h2>I can work 100s of hours every day.</h2>
      <HeroDemo>Schedule a demo</HeroDemo>
    </HeroSection>
    <InfoSection>
      <h1>Forget days, I will you scale your dev team capacity within hours.</h1>
      <Info>
        <p></p>
        <div />
      </Info>
    </InfoSection>

    <Footer>Copyright Murcul Limited</Footer>
  </Page>
);
