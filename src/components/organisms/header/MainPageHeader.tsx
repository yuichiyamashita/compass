import React from "react";
import styled from "styled-components";
import ForumIcon from "@mui/icons-material/Forum";
import QuickreplyIcon from "@mui/icons-material/Quickreply";

import { Container } from "../../molecules/container";
import { Flexbox } from "../../molecules/layout";
import { SimpleNavigation } from "../../molecules/navigation";
import { HamburgerMenu, AccountMenu } from "../menu";

const menus = [
  {
    to: "./selfdebate",
    text: "SELF DEBATE",
    icon: <ForumIcon />,
  },
  {
    to: "./fastthinking",
    text: "FAST THINKING",
    icon: <QuickreplyIcon />,
  },
];

const MainPageHeader: React.FC = React.memo(() => {
  return (
    <StyledHeader>
      <Container>
        <Flexbox justify="space-between" align="center">
          <StyledLogo>compass</StyledLogo>

          <StyledNavigation>
            <SimpleNavigation contents={menus} spacing={64} />
          </StyledNavigation>

          {/* pc */}
          <StyledPCButtonWrap>
            <AccountMenu />
          </StyledPCButtonWrap>

          {/* tab & sp */}
          <StyledButtonWrap>
            <HamburgerMenu contents={menus} />
          </StyledButtonWrap>
        </Flexbox>
      </Container>
    </StyledHeader>
  );
});

export default MainPageHeader;

const StyledNavigation = styled.nav`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;
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
    color: #673ab7;
  }
`;
const StyledPCButtonWrap = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
  }
`;
const StyledButtonWrap = styled.div`
  margin-right: 8px;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
