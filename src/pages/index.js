// @flow
import styled from "styled-components";
import React from "react";
import logoSrc from "./images/logo.svg";
import styles from "./styles.css";

const NavBarContainer = styled.nav`
  width: 100%;
  box-shadow: 0px 0px 35px #082aa3;
  position: relative;
`;

const Section = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
`;

const NavBarSection = Section.extend`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Heading = styled.h1`text-align: center;`;

const NavBar = props => (
  <NavBarContainer>
    <NavBarSection {...props} />
  </NavBarContainer>
);

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const BrandImg = styled.img.attrs({
  src: logoSrc
})`
  height: 25px;
  margin: 10px 0px;
`;

const HeroContainer = styled.div`
  background: linear-gradient(
      3.23deg,
      #1babda 2.17%,
      #3785ed 55.54%,
      #0465e7 89.32%
    ),
    #c4c4c4;
  width: 100%;
  color: white;
  min-height: 300px;
`;

const Hero = props => (
  <HeroContainer>
    <Section {...props} />
  </HeroContainer>
);

const InfoContainer = styled.section`
  backgrond-color: #f5f5f5;
  text-align: center;
  box-shadow: 0px 0px 35px #082aa3;
  position: relative;
  width: 100%;
  min-height: 300px;
`;

const Info = props => (
  <InfoContainer>
    <Section {...props} />
  </InfoContainer>
);

const HeroDemo = styled.button``;

const FooterContainer = styled.footer`
  background-color: #0465e7;
  width: 100%;
  min-height: 100px;
  color: white;
`;

const Footer = props => (
  <FooterContainer>
    <Section {...props} />
  </FooterContainer>
);

export default () => (
  <Page>
    <NavBar>
      <BrandImg />
    </NavBar>
    <Hero>
      <Heading>I am Murcul. Hire me as your next frontend developer</Heading>
      <h2>I can work 100s of hours every day.</h2>
      <HeroDemo>Schedule a demo</HeroDemo>
    </Hero>
    <Info>
      <Heading>
        Forget days, I will you scale your dev team capacity within hours.
      </Heading>
      <p />
      <div />
    </Info>
    <Footer>Copyright Murcul Limited</Footer>
  </Page>
);
