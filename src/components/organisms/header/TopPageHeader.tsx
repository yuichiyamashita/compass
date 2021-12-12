import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";

import { BasicLink } from "../../atoms/link";
import { Container } from "../../molecules/container";
import { Flexbox } from "../../molecules/layout";
import { SimpleNavigation } from "../../molecules/navigation";
import { HamburgerMenu } from "../menu";

const naviContents = [
  {
    to: "./features",
    text: "FEATURES",
    icon: <MailIcon />,
  },
  {
    to: "./about",
    text: "ABOUT",
    icon: <MailIcon />,
  },
  {
    to: "./news",
    text: "NEWS",
    icon: <MailIcon />,
  },
  {
    to: "./contact",
    text: "CONTACT",
    icon: <MailIcon />,
  },
];

const TopPageHeader: React.FC = React.memo(() => {
  return (
    <StyledHeader>
      <Container>
        <Flexbox justify="space-between" align="center">
          <StyledLogo>
            <Link to="/">compass</Link>
          </StyledLogo>

          <StyledNavigation>
            <SimpleNavigation contents={naviContents} spacing={24} />
          </StyledNavigation>

          {/* pc */}
          <StyledPCButtonWrap>
            <BasicLink text="ログイン" path="./login" border="1px solid #8bd5da" radius="6px" color="#8bd5da" />
            <div className="w-module-spacer--sm" />
            <BasicLink text="会員登録" path="./email-authentication" background="#8bd5da" radius="6px" color="#fff" />
          </StyledPCButtonWrap>

          {/* tab & sp */}
          <StyledButtonWrap>
            <HamburgerMenu contents={naviContents} />
          </StyledButtonWrap>
        </Flexbox>
      </Container>
    </StyledHeader>
  );
});

export default TopPageHeader;

const StyledHeader = styled.header`
  z-index: 999;
  position: fixed;
  height: 72px;
  width: 100%;
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
    color: #8bd5da;
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
