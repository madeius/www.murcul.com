import React from "react";
import Header from "../Header";
import Button from "../Button";
import styled from "styled-components";

const TitleHeading = styled.h1`
text-align: center;
color: white;
font-size: 50px;
`;

const SubtitleHeading = styled.h3`
  text-align: center;
  color: white;
  font-size: 25px;
`;

const Section = styled.section`
  background: linear-gradient(
      3.23deg,
      #1babda 2.17%,
      #3785ed 55.54%,
      #0465e7 89.32%
    ),
    #c4c4c4;
  height: 100vh;
  color: white;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;

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

export default function HeroSection() {
  return (
    <Section>
      <Header />
      <Hero>
        <TitleHeading>Hello, I am Murcul</TitleHeading>
        <SubtitleHeading>On Demand, self managed engineering team in the cloud</SubtitleHeading>
        <Controls>
          <Button onClick={() => this.setState({ showModal: true })}>
            Tell Me More
          </Button>
          <Button onClick={() => this.setState({ showModal: true })}>
            Schedule A Demo
          </Button>
        </Controls>
      </Hero>
    </Section>
  );
}
