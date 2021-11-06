import React, { FC } from "react";
import styled from "styled-components";
import { Container } from "../../molecules/container";
import { Flexbox } from "../../molecules/layout";

const OnlyLogoHeader: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Flexbox justify="flex-start" align="center">
          <StyledLogo>
            <a href="/">compass</a>
          </StyledLogo>
        </Flexbox>
      </Container>
    </StyledHeader>
  );
};

export default OnlyLogoHeader;

const StyledHeader = styled.header`
  height: 90px;
  box-shadow: 0 1px 2px #555;
  color: #555;
  text-transform: uppercase;
`;
const StyledLogo = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-left: 8px;
  @media screen and (min-width: 900px) {
    margin-left: 0;
  }
  &::first-letter {
    color: #8bd5da;
  }
`;
