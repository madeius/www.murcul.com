import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 80%;
  margin: auto;
`;

const FooterContainer = styled.footer`
  background-color: #0465e7;
  width: 100%;
  min-height: 100px;
  color: white;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Section>Copyright Murcul Limited</Section>
    </FooterContainer>
  );
}
