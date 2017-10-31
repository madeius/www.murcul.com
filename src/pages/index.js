// @flow
import styled from 'styled-components'
import React from 'react'
import styles from './styles.css'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import PositionsSection from '../components/PositionsSection'
import Footer from '../components/Footer'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Hind Madurai', sans-serif;
  width: 100%;
`

export default function LandingPage() {
  return (
    <Page>
      <HeroSection />
      <InfoSection />
      <PositionsSection />
      <Footer />
    </Page>
  )
}
