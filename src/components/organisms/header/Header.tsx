import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PrimaryButton } from "../../atoms/button";
import { Container } from "../../molecules/container";
import { Flexbox } from "../../molecules/layout";
import { SimpleNavigation } from "../../molecules/navigation";
import { HamburgerMenu } from "../hamburgerMenu";

const naviContents = [
  {
    to: "./features",
    text: "features",
  },
  {
    to: "./tutorial",
    text: "tutorial",
  },
  {
    to: "./about",
    text: "about",
  },
  {
    to: "./news",
    text: "news",
  },
  {
    to: "./contact",
    text: "contact",
  },
];

const Header: React.FC = React.memo(() => {
  return (
    <StyledHeader>
      <Container>
        <Flexbox justify="space-between" align="center">
          <StyledLogo>
            <Link to="/">compass</Link>
          </StyledLogo>

          <StyledNavigation>
            <SimpleNavigation contents={naviContents} />
          </StyledNavigation>

          {/* pc */}
          <StyledPCButtonWrap>
            <PrimaryButton text="ログイン" path="./login" border="1px solid #673ab7" radius="6px" color="#673ab7" />
            <div className="w-module-spacer--sm" />
            <PrimaryButton
              text="会員登録"
              path="./email-authentication"
              background="#673ab7"
              radius="6px"
              color="#fff"
            />
          </StyledPCButtonWrap>

          {/* tab & sp */}
          <StyledButtonWrap>
            <HamburgerMenu />
          </StyledButtonWrap>
        </Flexbox>
      </Container>
    </StyledHeader>
  );
});

export default Header;

const StyledHeader = styled.header`
  height: 72px;
  background: #fff;
  box-shadow: 0px 2px 8px #999;
  color: #555;
  text-transform: uppercase;
  width: 100%;
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

const StyledNavigation = styled.nav`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

const StyledPCButtonWrap = styled.div`
  display: none;

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

const StyledButtonWrap = styled.div`
  margin-right: 8px;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;
