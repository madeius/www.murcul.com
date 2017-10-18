// @flow
import styled from 'styled-components'
import React from 'react'
import Modal from 'react-modal'

import logoSrc from '../assets/logo.svg'
import graphSrc from '../assets/graph.svg'
import ticketSrc from '../assets/ticket.gif'
import integrationSrc from '../assets/integrations.svg'
import styles from './styles.css'
import ScheduleDemoModal from './../components/ScheduleDemoModal'

const NavBarContainer = styled.nav`
  width: 100%;
  box-shadow: 0px 0px 35px #082aa3;
  position: relative;
`

const Section = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
`

const NavBarSection = Section.extend`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Heading = styled.h1`text-align: center;`

const NavBar = props => (
  <NavBarContainer>
    <NavBarSection {...props} />
  </NavBarContainer>
)

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const BrandImg = styled.img.attrs({
  src: logoSrc
})`
  height: 25px;
  margin: 10px 0px;
`

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
`

const Hero = props => (
  <HeroContainer>
    <Section {...props} />
  </HeroContainer>
)

const InfoContainer = styled.section`
  backgrond-color: #f5f5f5;
  text-align: center;
  box-shadow: 0px 0px 35px #082aa3;
  position: relative;
  width: 100%;
  min-height: 300px;
`

const Info = props => (
  <InfoContainer>
    <Section {...props} />
  </InfoContainer>
)

const HeroDemo = styled.button``

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
`

const Positions = props => (
  <PositionsContainer>
    <Section {...props} />
  </PositionsContainer>
)

const PositionText = styled.h1`
  text-align: center;
  color: #ffffff;
`
const OrangeButton = styled.button`
  width: 225px;
  height: 45px;
  font-size: 17px;
  background-color: #fd9752;
  color: #ffffff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  outline: none;
`
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
`

const FooterContainer = styled.footer`
  background-color: #0465e7;
  width: 100%;
  min-height: 100px;
  color: white;
`

const GraphicContainer = styled.img`
  width: 40%;
  margin-left: 5%;
  margin-right: 5%;
`

const FlexRow = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
`

const InfoArea = styled.div`
  width: 60%;
  text-align: center;
`

const InfoAreaHeading = styled.h3`
  text-align: left;
  font-size: 18px;
`

const InfoAreaDetails = styled.p`
  text-align: left;
  font-size: 14px;
`

const EmptySpace = styled.div`height: 30px;`
const Footer = props => (
  <FooterContainer>
    <Section {...props} />
  </FooterContainer>
)

export default class LandingPage extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  closeModal = () => this.setState({ showModal: false });

  render() {
    const { showModal } = this.state
    return (
      <Page>
        <NavBar>
          <BrandImg />
        </NavBar>
        <Hero>
          <FlexRow>
            <GraphicContainer />
            <InfoArea>
              <Heading>Hello, I am Murcul</Heading>
              <center>
                <h3>Hire me as your next React Dev</h3>
              </center>
              <OrangeButton onClick={() => this.setState({ showModal: true })}>
                Learn More
              </OrangeButton>
            </InfoArea>
          </FlexRow>
        </Hero>

        <ScheduleDemoModal isOpen={showModal} closeModal={this.closeModal} />

        <Info>
          <Heading>Code what really matters, leave the rest to me!</Heading>
          <FlexRow>
            <InfoArea>
              <InfoAreaHeading>Managing me is super easy!</InfoAreaHeading>
              <InfoAreaDetails>
                Assign tickets directly from JIRA, Github or your favourite
                ticket management system.
              </InfoAreaDetails>
              <InfoAreaDetails>
                Get real-time ticket status updates through Murcul Dashboard.
              </InfoAreaDetails>
              <InfoAreaDetails>
                Bugs get fixed within hours, no matter how many
              </InfoAreaDetails>
            </InfoArea>
            <GraphicContainer src={integrationSrc} />
          </FlexRow>

          <EmptySpace />

          <FlexRow>
            <GraphicContainer src={graphSrc} />
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
          </FlexRow>

          <EmptySpace />

          <FlexRow>
            <InfoArea>
              <InfoAreaHeading>I meet deadlines. Seriously!</InfoAreaHeading>
              <InfoAreaDetails>
                Every assigned ticket will be fully speced before hand.
              </InfoAreaDetails>
              <InfoAreaDetails>
                Never get charged for PR code revisions
              </InfoAreaDetails>
            </InfoArea>
            <GraphicContainer src={ticketSrc} />
          </FlexRow>

          <EmptySpace />

          <OrangeButton>Take a tour</OrangeButton>

          <EmptySpace />
        </Info>
        <Positions>
          <PositionText>I am a multi-talented coder!</PositionText>
          <PositionText>
            I can preform many roles for your organization!
          </PositionText>
          <PositionText>
            Save you from hiring trouble and tedious management!
          </PositionText>
          <PositionText>I am a multi-talented coder!</PositionText>

          <EmptySpace />

          <FlexRow>
            <PositionTab>QA Engineer</PositionTab>

            <PositionTab>Data Scientist</PositionTab>

            <PositionTab>Frontend Dev</PositionTab>
          </FlexRow>

          <EmptySpace />

          <OrangeButton>Have a look!</OrangeButton>

          <EmptySpace />
        </Positions>
        <Footer>Copyright Murcul Limited</Footer>
      </Page>
    )
  }
}
