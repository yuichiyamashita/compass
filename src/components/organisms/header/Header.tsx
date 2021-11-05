import React, { FC } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../atoms/button";
import { Container } from "../../molecules/container";
import { Flexbox } from "../../molecules/layout";
import { HamburgerMenu } from "../hamburgerMenu";

const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Flexbox justify="space-between" align="center">
          <StyledLogo>
            <a href="/">compass</a>
          </StyledLogo>

          <StyledNavigation>
            <a href="./features">Features</a>
            <a href="./tutorial">Tutorial</a>
            <a href="./faq">FAQ</a>
            <a href="./news">News</a>
          </StyledNavigation>

          {/* pc */}
          <StyledPCButtonWrap>
            <PrimaryButton text="ログイン" href="./login" border="1px solid #555" color="#555" />
            <PrimaryButton text="会員登録" href="./signup" border="1px solid #8bd5da" color="#8bd5da" />
          </StyledPCButtonWrap>

          {/* tab & sp */}
          <StyledButtonWrap>
            <HamburgerMenu />
          </StyledButtonWrap>
        </Flexbox>
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  // height: 90px;
  // width: 100vw;
  // background: #fff;
  // box-shadow: 0 1px 2px #666;
  // color: #666;
  // text-transform: uppercase;
  height: 90px;
  box-shadow: 0 1px 2px #555;
  color: #555;
  text-transform: uppercase;
`;
const StyledLogo = styled.h1`
  font-size: 24px;
  font-weight: 600;
  &::first-letter {
    color: #8bd5da;
  }
`;
const StyledNavigation = styled.nav`
  display: none;
  @media screen and (min-width: 900px) {
    display: flex;
    a {
      margin-right: 24px;
      transition: all 0.3s;

      &:hover {
        opacity: 0.7;
        transform: translateY(-1px);
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
const StyledPCButtonWrap = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
    a {
      margin-right: 8px;
      &:last-child {
        margin: 0;
      }
    }
  }
`;
const StyledButtonWrap = styled.div`
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
