import React from "react";
import styled from "styled-components";
import Button from "../Button";

import logoSrc from "../../assets/logo-inverted.png";
import Section from "../Layout/Section";
import graphSrc from "../../assets/graph.svg";
import ticketSrc from "../../assets/ticket.gif";
import integrationSrc from "../../assets/integrations.svg";

const Heading = styled.h1`
  text-align: center;
  color: #0465e7;
  margin: 40px 0px 40px 0;
  font-size: 1.8em;
  margin-bottom: 100px;
`;

const Graphic = styled.img`
  @media all and (max-width: 600px) {
    width: 100%;
  }
  width: 50%;
  max-height: 500px;
`;

const Info = Section.extend`
  backgrond-color: #f5f5f5;
  text-align: center;
  /* box-shadow: 0px 0px 35px #082aa3; */
  position: relative;
  min-height: 300px;
  padding-bottom: 60px;
  padding-top: 60px;
  z-index: 2;
`;

const FlexRow = styled.div`
  display: flex;
  height: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;

  @media all and (max-width: 600px) {
    flex-direction: column;
  }
`;

const InfoAreaHeading = styled.h3`
  text-align: center;
  font-size: 1.2em;
`;

const InfoAreaDetails = styled.p`
  text-align: center;
  color: #515151;
  margin-bottom: 0;
  margin-top: 8px;
`;

const InfoArea = styled.div`
  @media all and (max-width: 600px) {
    margin: 0;
    order: 0;
  }
`;

const InfoAreaLeft = InfoArea.extend`
  margin-right: 10%;
  order: -1;
`;

const InfoAreaRight = InfoArea.extend`
  margin-left: 10%;
  order: 1;
`;

export default function InfoSection() {
  return (
    <Info id="info-section">
      <Heading>Code what really matters. Let me handle the rest.</Heading>

      <FlexRow>
        <Graphic src={ticketSrc} />
        <InfoAreaLeft>
          <InfoAreaHeading>Comprehensive development process</InfoAreaHeading>
          <InfoAreaDetails>
            Every assigned ticket is fully speced upfront
          </InfoAreaDetails>
          <InfoAreaDetails>
            Get realistic time estimates on each assigned ticket   
          </InfoAreaDetails>
          <InfoAreaDetails>Fix critical bug fixes within hours</InfoAreaDetails>
        </InfoAreaLeft>
      </FlexRow>

      <FlexRow>
        <Graphic src={graphSrc} />
        <InfoAreaRight>
          <InfoAreaHeading>I auto scale and adapt to workload!</InfoAreaHeading>
          <InfoAreaDetails>
            Optimize your QA and testing framework
          </InfoAreaDetails>
          <InfoAreaDetails>
            All PRs come with 100% unit test coverage
          </InfoAreaDetails>
          <InfoAreaDetails>
            Flesh out integration testing for critical user flows
          </InfoAreaDetails>
        </InfoAreaRight>
      </FlexRow>

      <FlexRow>
        <Graphic src={integrationSrc} />
        <InfoAreaLeft>
          <InfoAreaHeading>
            Managing me is quick and super easy!
          </InfoAreaHeading>
          <InfoAreaDetails>
            Assign tickets directly from JIRA & GitHub
          </InfoAreaDetails>
          <InfoAreaDetails>
            Setup a cross platform dev workflow through Docker
          </InfoAreaDetails>
          <InfoAreaDetails>
            Get unlimited PR code revisions at no cost
          </InfoAreaDetails>
        </InfoAreaLeft>
      </FlexRow>
    </Info>
  );
}
