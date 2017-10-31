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
`;

const Positions = props => (
  <PositionsContainer>
    <Section {...props} />
  </PositionsContainer>
);

const PositionText = styled.h1`
  text-align: center;
  color: #ffffff;
`;

const PositionTab = styled.button`
  width: 150px;
  height: 50px;
  font-size: 17px;
  margin: 0px 20px 0px 20px;
  background-color: #cccccc;
  color: #ffffff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  outline: none;
`;

export default function PositionsSection() {
  return (
    <Positions>
      <PositionText>
        I can preform many roles for your organization!
      </PositionText>

      <PositionTab>QA Engineer</PositionTab>
      <PositionTab>Data Scientist</PositionTab>
      <PositionTab>Frontend Dev</PositionTab>
      <br/>
      <Button>Have a look!</Button>
    </Positions>
  );
}
