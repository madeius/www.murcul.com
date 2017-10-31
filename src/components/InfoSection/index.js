import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

import logoSrc from '../../assets/logo-inverted.png'
import graphSrc from '../../assets/graph.svg'
import ticketSrc from '../../assets/ticket.gif'
import ticketInvertedSrc from '../../assets/ticket-inverted.gif'
import integrationSrc from '../../assets/integrations.svg'
import logoInvertedSrc from '../../assets/logo-icon-inverted.svg'

const Section = styled.div`
  width: 70%;
  margin: auto;
`

const Heading = styled.h1`
  text-align: center;
  color: #0465e7;
  margin: 40px 0px 40px 0;
  font-size: 45px;
  margin-bottom: 100px;
`

const GraphicContainerLeft = styled.div`
  max-width: 60%;
  max-height: 500px;
  float: left;
`;
const GraphicContainerRight = styled.div`
  max-width: 60%;
  max-height: 500px;
  float: right;
`;

const InfoContainer = styled.section`
  backgrond-color: #f5f5f5;
  text-align: center;
  box-shadow: 0px 0px 35px #082aa3;
  position: relative;
  width: 100%;
  min-height: 300px;
  padding-bottom: 60px;
  padding-top: 60px;
`

const Info = props => (
  <InfoContainer>
    <Section {...props} />
  </InfoContainer>
)

const GraphicImg = styled.img`width: 100%;`

const FlexRow = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-items: center;
  margin-bottom: 80px;
`

const InfoArea = styled.div`
  width: 100%;
  text-align: center;
`

const InfoAreaHeading = styled.h3`
  text-align: left;
  font-size: 26px;
`

const InfoAreaDetails = styled.p`
  text-align: left;
  font-size: 24px;
  color: #515151;
`;

const Left = styled.div`
  float: left;
  width: 40%;
  margin-right: 10%;
  text-align: left;
`

const Right = styled.div`
  float: right;
  width: 40%;
  margin-left: 10%;
  text-align: right;
`
const ButtonContainer = styled.div`margin-top: 100px;`;

export default function InfoSection() {
  return (
    <Info>
      <Heading>Code what really matters, leave the rest to me!</Heading>
      <FlexRow>
        <Left>
        <InfoArea>
          <InfoAreaHeading>Managing me is super easy!</InfoAreaHeading>
          <InfoAreaDetails>
            Assign tickets directly from JIRA, Github or your favourite ticket
            management system.
          </InfoAreaDetails>
          <InfoAreaDetails>
            Get real-time ticket status updates through Murcul Dashboard.
          </InfoAreaDetails>
          <InfoAreaDetails>
            Bugs get fixed within hours, no matter how many
          </InfoAreaDetails>
        </InfoArea>
        </Left>
        <GraphicContainerRight>
          <GraphicImg src={integrationSrc} />
        </GraphicContainerRight>
      </FlexRow>

      <FlexRow>
        <GraphicContainerLeft>
          <GraphicImg src={graphSrc} />
        </GraphicContainerLeft>
        <Right>
          <InfoArea>
            <InfoAreaHeading>
              I auto-scale and adapt to the workload
            </InfoAreaHeading>
            <InfoAreaDetails>
              All PRs through Murcul come with 100% unit test coverage.
            </InfoAreaDetails>
            <InfoAreaDetails>
              Fleshout integration testing for critical user flows.
            </InfoAreaDetails>
          </InfoArea>
        </Right>
      </FlexRow>

      <FlexRow>
        <Left>
        <InfoArea>
          <InfoAreaHeading>I meet deadlines. Seriously!</InfoAreaHeading>
          <InfoAreaDetails>
            Every assigned ticket will be fully speced before hand.
          </InfoAreaDetails>
          <InfoAreaDetails>
            Never get charged for PR code revisions
          </InfoAreaDetails>
        </InfoArea>
        </Left>
        <GraphicContainerRight>
          <GraphicImg src={ticketSrc} />
        </GraphicContainerRight>
      </FlexRow>
      <ButtonContainer>
        <Button>Take a tour</Button>
      </ButtonContainer>
    </Info>
  )
}
