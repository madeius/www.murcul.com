import React from "react";
import Header from "../Header";
import Button from "../Button";
import Section from "../Layout/Section";
import styled from "styled-components";
import reactLogoSrc from "../../assets/react_logo.svg";
import reduxLogoSrc from "../../assets/redux_white.svg";
import jsLogoSrc from "../../assets/js_white.svg";
import graphqlLogoSrc from "../../assets/graphql_white.svg";

const TitleHeading = styled.h1`
  text-align: center;
  color: white;
  font-size: 1.5em;
`;

const SubtitleHeading = styled.h3`
  text-align: center;
  color: white;
  font-size: 1.2em;
`;

const Container = Section.extend`
  background: linear-gradient(
      3.23deg,
      #1babda 2.17%,
      #3785ed 55.54%,
      #0465e7 89.32%
    ),
    #c4c4c4;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Hero = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin-top: 20px;
`;

const Logos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 300px) {
    display: none;
  }
`;

const Logo = styled.img`width: 100px;`;

export default function HeroSection() {
  return (
    <Container>
      <Header />
      <Hero>
        <TitleHeading>Hello. I am Murcul.</TitleHeading>
        <Logos>
          <Logo src={reactLogoSrc} />
          <Logo src={reduxLogoSrc} />
          <Logo src={jsLogoSrc} />
          <Logo src={graphqlLogoSrc} />
        </Logos>

        <SubtitleHeading>
          A highly scalable, on demand, self managed engineer in the cloud
        </SubtitleHeading>
        <Controls>
          <a href="#info-section">
            <Button>Learn More</Button>
          </a>
        </Controls>
      </Hero>
    </Container>
  );
}
