import React from "react";
import Button from "../Button";
import styled from "styled-components";

import Colors from "../../colors";

const Section = styled.div`
  width: 80%;
  margin: auto;
`;

const PricingContainer = styled.section`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: center;
  position: relative;
  /* box-shadow: 0px 0px 35px #082aa3; */
  z-index: 2;
`;

const Pricing = props => (
  <PricingContainer>
    <Section {...props} />
  </PricingContainer>
);

const Heading = styled.h1`
  text-align: center;
  color: ${Colors.primaryColor};
  font-size: 1.5em;
`;

const Column = styled.div`
  float: left;
  width: 23%;
  padding: 8px;
`;

const Plan = styled.div`
  list-style-type: none;
  border: 1px solid #eee;
  margin: 0;
  padding: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
`;

const Cell = styled.div`
  border-bottom: 1px solid #eee;
  padding: 20px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: 100px;
`;

export default function PricingSection() {
  return (
    <Pricing>
      <Heading>Pricing Plans</Heading>
      <Column>
        <Plan>
          <Cell>Feature</Cell>
          <Cell>Product Development Hours</Cell>
          <Cell>Ship With Feature Flags</Cell>
          <Cell>Rollover Development Hours</Cell>
          <Cell>Design Specs</Cell>
          <Cell>Code Reviews</Cell>
          <Cell>Tech Specs</Cell>
          <Cell>QA Coverage</Cell>
          <Cell>Customer Usage Analytics</Cell> 
          <Cell>Critical Bug Fixes SLA</Cell>
        </Plan>
      </Column>
      <Column>
        <Plan>
          <Cell>Feature</Cell>
          <Cell>Hello</Cell>
          <Cell>Hello</Cell>
          <Cell>Hello</Cell>
        </Plan>
      </Column>
      <Column>
        <Plan>
          <Cell>Feature</Cell>
          <Cell>Hello</Cell>
          <Cell>Hello</Cell>
          <Cell>Hello</Cell>
        </Plan>
      </Column>
      <Column>
        <Plan>
          <Cell>Feature</Cell>
          <Cell>Hello</Cell>
          <Cell>Hello</Cell>
          <Cell>Hello</Cell>
        </Plan>
      </Column>
      {/* <ButtonContainer>
        <Button>Get in touch</Button>
      </ButtonContainer> */}
    </Pricing>
  );
}
