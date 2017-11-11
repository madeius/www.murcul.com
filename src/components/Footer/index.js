import React from "react";
import logoSrc from "../../assets/logo-inverted.png";
import styled from "styled-components";

const SectionLeft = styled.div`
  width: 100%;
  margin: auto;

  text-align: center;

  @media (max-width: 350px) {
    display: none;
  }
`;

const SectionRight = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
`;

const FooterLogo = styled.img`width: 25%;`;

const FooterContainer = styled.footer`
  background-color: #0465e7;
  width: 100%;
  min-height: 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EmailLink = styled.a`color: white;`;

export default function Footer() {
  return (
    <FooterContainer>
      <SectionLeft>
        Copyright &copy; 2017 Murcul Limited. All rights reserved.
      </SectionLeft>
      <SectionRight>
        <FooterLogo src={logoSrc} />
        <div>
          <EmailLink href="mailto:contact@murcul.com">
            contact@murcul.com
          </EmailLink>
        </div>
      </SectionRight>
    </FooterContainer>
  );
}
