import React from 'react'
import Button from '../Button'
import styled from 'styled-components'

import Colors from '../../colors'

const Section = styled.div`
  width: 80%;
  margin: auto;
`

const PricingContainer = styled.section`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: center;
  position: relative;
  box-shadow: 0px 0px 35px #082aa3;
  z-index: 2;
`

const Pricing = props => (
  <PricingContainer>
    <Section {...props} />
  </PricingContainer>
)

const Heading = styled.h1`
  text-align: center;
  color: ${Colors.primaryColor};
  font-size: 45px;
`

const PricingTab = styled.div`
  width: 250px;
  height: 400px;
  background-color: lightgrey;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  outline: none;
`

const PricingTabs = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: auto;
  justify-content: space-around;
  align-items: center;
`

const ButtonContainer = styled.div`margin-top: 100px;`

export default function PricingSection() {
  return (
    <Pricing>
      <Heading>Pricing</Heading>
      <PricingTabs>
        <PricingTab />
        <PricingTab />
        <PricingTab />
      </PricingTabs>
      <ButtonContainer>
        <Button>Get in touch</Button>
      </ButtonContainer>
    </Pricing>
  )
}
