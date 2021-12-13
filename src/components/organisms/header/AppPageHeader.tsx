import React from "react";
import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { AccountMenu } from "../menu";

const AppPageHeader: React.FC = React.memo(() => {
  return (
    <StyledHeader>
      <StyledLink href="./main">
        <HomeOutlinedIcon fontSize="large" />
      </StyledLink>
      <StyledTitle>Self debate</StyledTitle>
      <StyledAccountIcon>
        <AccountMenu />
      </StyledAccountIcon>
    </StyledHeader>
  );
});

export default AppPageHeader;

const StyledHeader = styled.header`
  z-index: 10;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 2px #555;
  color: #555;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #8bd5da;
  color: #fff;
  cursor: pointer;
  height: 100%;
  width: 50px;
  margin-right: 16px;

  @media screen and (min-width: 1024px) {
    margin-right: 32px;
  }
`;

const StyledTitle = styled.h1`
  font-family: "Sriracha", cursive;
  font-size: 24px;
  letter-spacing: 1.5px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

const StyledAccountIcon = styled.div`
    display: block;
    margin-left: auto;

    @media screen and (min-width: 768px) {
        margin-right: 16px;
    }
  }
`;
