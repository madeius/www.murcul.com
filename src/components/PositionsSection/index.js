import React from "react";
import Button from "../Button";
import styled from "styled-components";

const Section = styled.div`
  width: 80%;
  margin: auto;
`;

const PositionsContainer = styled.section`
  background: linear-gradient(
      3.23deg,
      #1babda 2.17%,
      #3785ed 55.54%,
      #0465e7 89.32%
    ),
    #c4c4c4;
  text-align: center;
  position: relative;
  width: 100%;
  min-height: 300px;
  padding-top: 60px;
  padding-bottom: 60px;
`;

const Positions = props => (
  <PositionsContainer>
    <Section {...props} />
  </PositionsContainer>
);

const PositionText = styled.h1`
  text-align: center;
  color: #ffffff;
  font-size: 1.5em;
`;

const PositionTab = styled.button`
  width: 150px;
  height: 50px;
  background-color: #cccccc;
  color: #ffffff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  outline: none;
`;

const PositionTabs = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: auto;
  justify-content: space-around;
  align-items: center;
`;

const PositionGraphic = styled.div`
  height: 300px;
  width: 70%;
  margin: auto;
  background-color: lightgrey;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export default function PositionsSection() {
  return (
    <Positions>
      <PositionText>Let me extend your team capacity!</PositionText>
      <PositionTabs>
        <PositionTab>QA Engineer</PositionTab>
        <PositionTab>Data Scientist</PositionTab>
        <PositionTab>Frontend Dev</PositionTab>
      </PositionTabs>
      <PositionGraphic />
    </Positions>
  );
}
