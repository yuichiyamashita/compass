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
            <a href="./tutorial">About</a>
            <a href="./tutorial">Tutorial</a>
            <a href="./news">News</a>
            <a href="./contact">Contact</a>
            {/* <a href="./features">機能紹介</a>
            <a href="./tutorial">使い方</a>
            <a href="./news">お知らせ</a>
            <a href="./faq">問い合わせ</a> */}
          </StyledNavigation>

          {/* pc */}
          <StyledPCButtonWrap>
            <PrimaryButton text="ログイン" href="./login" border="1px solid #8bd5da" color="#8bd5da" />
            <div className="w-module-spacer--sm" />
            <PrimaryButton text="会員登録" href="./email-authentication" background="#8bd5da" color="#fff" />
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
  height: 72px;
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
const StyledNavigation = styled.nav`
  display: none;
  font-weight: 600;
  @media screen and (min-width: 900px) {
    display: flex;
    a {
      margin-right: 24px;
      transition: all 0.3s;

      &:hover {
        opacity: 0.7;
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
    display: flex;
  }
`;
const StyledButtonWrap = styled.div`
  margin-right: 8px;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
