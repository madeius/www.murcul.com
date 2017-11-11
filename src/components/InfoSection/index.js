import React from "react";
import styled from "styled-components";
import Button from "../Button";

import logoSrc from "../../assets/logo-inverted.png";
import Section from "../Layout/Section";
import graphSrc from "../../assets/graph.svg";
import ticketSrc from "../../assets/ticket.gif";
import ticketInvertedSrc from "../../assets/ticket-inverted.gif";
import integrationSrc from "../../assets/integrations.svg";
import logoInvertedSrc from "../../assets/logo-icon-inverted.svg";

const Heading = styled.h1`
  text-align: center;
  color: #0465e7;
  margin: 40px 0px 40px 0;
  font-size: 1.5em;
  margin-bottom: 100px;
`;

const Graphic = styled.img`
  max-width: 60%;
  max-height: 500px;
`;

const Info = Section.extend`
  backgrond-color: #f5f5f5;
  text-align: center;
  box-shadow: 0px 0px 35px #082aa3;
  position: relative;
  min-height: 300px;
  padding-bottom: 60px;
  padding-top: 60px;
  z-index: 2;
`;

const FlexRow = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

const InfoAreaHeading = styled.h3`
  text-align: left;
  font-size: 1.2em;
`;

const InfoAreaDetails = styled.p`
  text-align: left;
  color: #515151;
  margin-bottom: 0;
  margin-top: 8px;
`;

const InfoArea = styled.div`width: 40%;`;

const InfoAreaLeft = InfoArea.extend`margin-right: 10%;`;

const InfoAreaRight = InfoArea.extend`margin-left: 10%;`;

export default function InfoSection() {
  return (
    <Info id="info-section">
      <Heading>Code what really matters. Let me handle the rest.</Heading>

      <FlexRow>
        <InfoAreaLeft>
          <InfoAreaHeading>I meet every deadline. Seriously!</InfoAreaHeading>
          <InfoAreaDetails>
            Every assigned ticket is fully speced before hand
          </InfoAreaDetails>
          <InfoAreaDetails>
            Get real time ticket updates through the Murcul Dashboard
          </InfoAreaDetails>
          <InfoAreaDetails>
            Fix even your most time consuming bugs within hours
          </InfoAreaDetails>
        </InfoAreaLeft>
        <Graphic src={ticketSrc} />
      </FlexRow>

      <FlexRow>
        <Graphic src={graphSrc} />
        <InfoAreaRight>
          <InfoAreaHeading>
            I auto scale and adapt to incoming workload!
          </InfoAreaHeading>
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
        <InfoAreaLeft>
          <InfoAreaHeading>
            Managing me is quick and super easy!
          </InfoAreaHeading>
          <InfoAreaDetails>
            Assign tickets directly from JIRA, GitHub or your favorite ticket
            management system
          </InfoAreaDetails>
          <InfoAreaDetails>
            I can integrate with docker, react, node, go, javascript and more
          </InfoAreaDetails>
          <InfoAreaDetails>
            Get unlimited code reviews with no charge for PR code revisions
          </InfoAreaDetails>
        </InfoAreaLeft>
        <Graphic src={integrationSrc} />
      </FlexRow>
    </Info>
  );
}
