import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container, Flexbox } from "../../layout";

const LogoOnlyHeader: React.FC = React.memo(() => {
  return (
    <StyledHeader>
      <Container>
        <Flexbox justify="flex-start" align="center">
          <StyledLogo>
            <Link to="/">compass</Link>
          </StyledLogo>
        </Flexbox>
      </Container>
    </StyledHeader>
  );
});

export default LogoOnlyHeader;

const StyledHeader = styled.header`
  height: 90px;
  box-shadow: 0 1px 2px #555;
  color: #555;
  text-transform: uppercase;
`;
const StyledLogo = styled.h1`
  font-size: 24px;
  font-weight: 600;
  font-family: "Sriracha", cursive;
  margin-left: 8px;
  @media screen and (min-width: 900px) {
    margin-left: 0;
  }
  &::first-letter {
    color: #8bd5da;
  }
`;
