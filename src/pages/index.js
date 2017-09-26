// @flow
import styled from 'styled-components'
import React from 'react'
import logoSrc from './images/logo.svg'
import styles from './styles.css'

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

const FooterContainer = styled.footer`
  background-color: #0465e7;
  width: 100%;
  min-height: 100px;
  color: white;
`

const GraphicContainer = styled.div`
  width: 100%;
  background-color: orange;
`

const FlexRow = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
`

const InfoArea = styled.div`width: 100%;`

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

export default () => (
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
        </InfoArea>
      </FlexRow>
    </Hero>
    <Info>
      <Heading>Code what really matters, leave the rest to me!</Heading>
      <FlexRow>
        <InfoArea>
          <InfoAreaHeading>
            I auto-scale as more tickets get assigned
          </InfoAreaHeading>
          <InfoAreaDetails>
            Assign tickets directly from JIRA, Github or your favourite ticket
            management system.
          </InfoAreaDetails>
          <InfoAreaDetails>
            Get real-time ticket status updates through Murcul Dashboard.
          </InfoAreaDetails>
          <InfoAreaDetails>
            Bugs get fixed within hours, no matter how many.
          </InfoAreaDetails>
        </InfoArea>
        <GraphicContainer />
      </FlexRow>

      <EmptySpace />

      <FlexRow>
        <GraphicContainer />
        <InfoArea>
          <InfoAreaHeading>
            Let me take your QA to the next level
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
          <InfoAreaHeading>Review my code as much as you like</InfoAreaHeading>
          <InfoAreaDetails>
            Every assigned ticket will be fully speced before hand.
          </InfoAreaDetails>
          <InfoAreaDetails>
            Never get charged for PR code revisions
          </InfoAreaDetails>
        </InfoArea>
        <GraphicContainer />
      </FlexRow>
    </Info>
    <Footer>Copyright Murcul Limited</Footer>
  </Page>
)
