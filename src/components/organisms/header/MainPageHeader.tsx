import React from "react";
import styled from "styled-components";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HistoryIcon from "@mui/icons-material/History";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { Flexbox } from "../../molecules/layout";
import { HamburgerMenu, AccountMenu } from "../menu";
import { SimpleNavigation } from "../../molecules/navigation";

const menus = [
  {
    to: "./trend",
    text: "トレンド",
    icon: <TrendingUpIcon />,
  },
  {
    to: "./tutorial",
    text: "チュートリアル",
    icon: <HelpOutlineIcon />,
  },
  {
    to: "./history",
    text: "ヒストリー",
    icon: <HistoryIcon />,
  },
];

const MainPageHeader: React.FC = React.memo(() => {
  return (
    <StyledHeader>
      <Flexbox align="center">
        <StyledLink href="./main">
          <HomeOutlinedIcon fontSize="large" />
        </StyledLink>

        <StyledNavigationWrap>
          <SimpleNavigation contents={menus} spacing={32} fontSize={14} />
        </StyledNavigationWrap>

        {/* pc */}
        <StyledPCButtonWrap>
          <AccountMenu />
        </StyledPCButtonWrap>

        {/* tab & sp */}
        <StyledButtonWrap>
          <HamburgerMenu contents={menus} />
        </StyledButtonWrap>
      </Flexbox>
    </StyledHeader>
  );
});

export default MainPageHeader;

const StyledHeader = styled.header`
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 2px #555;
  color: #555;
`;

const StyledLink = styled.a`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #8bd5da;
  color: #fff;
  cursor: pointer;
  height: 100%;
  width: 60px;

  @media screen and (min-width: 1024px) {
    position: static;
    margin-right: 32px;
  }
`;

const StyledNavigationWrap = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

const StyledPCButtonWrap = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
    margin-left: auto;
    margin-right: 16px;
  }
`;

const StyledButtonWrap = styled.div`
  display: block;
  margin-left: auto;
  margin-right: 8px;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
