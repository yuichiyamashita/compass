import React from "react";
import styled from "styled-components";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { Container } from "../../molecules/container";
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
    icon: <TrendingUpIcon />,
  },
];

const AppHeader: React.FC = React.memo(() => {
  return (
    <StyledHeader>
      <Container>
        <Flexbox align="center">
          <StyledHomeWrap>
            <a
              href="./main"
              style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <HomeOutlinedIcon fontSize="large" />
            </a>
          </StyledHomeWrap>

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
      </Container>
    </StyledHeader>
  );
});

export default AppHeader;

const StyledHeader = styled.header`
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 2px #555;
  color: #555;
`;
const StyledHomeWrap = styled.div`
  height: 100%;
  width: 60px;
  background: #8bd5da;
  color: #fff;
  cursor: pointer;
  margin-right: 32px;
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
  }
`;
const StyledButtonWrap = styled.div`
  display: block;
  margin-left: auto;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
