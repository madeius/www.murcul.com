import React from 'react'
import logoSrc from '../../assets/logo-inverted.png'
import styled from 'styled-components'

const SectionLeft = styled.div`
  width: 100%;
  margin: auto;
  float: left;
  margin-left: 10%;
  font-size: 18px;
`

const SectionRight = styled.div`
  width: 100%;
  margin: auto;
  float: right;
  margin-right: 10%;
  text-align: right;
`

const FooterLogo = styled.img`width: 25%;`

const FooterContainer = styled.footer`
  background-color: #0465e7;
  width: 100%;
  min-height: 100px;
  color: white;
  display: flex;
  align-items: center;
`

export default function Footer() {
  return (
    <FooterContainer>
      <SectionLeft>
        Copyright &copy; 2017 Murcul Limited. All rights reserved.
      </SectionLeft>
      <SectionRight>
        <FooterLogo src={logoSrc} />
      </SectionRight>
    </FooterContainer>
  )
}
