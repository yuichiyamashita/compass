import React, { FC } from "react";
import styled from "styled-components";

import { Grid as MuiGrid } from "@mui/material";

import { Container } from "../../molecules/container";
import { MainPageHeader } from "../../organisms/header";
import { MainFeatureBox } from "../../organisms/mainFeatureBox";

const Main: FC = () => {
  const contents = [
    { id: "123", text: "あいうえお" },
    { id: "456", text: "かきくけこ" },
    { id: "789", text: "さしすせそ" },
    { id: "987", text: "たちつてと" },
    { id: "654", text: "なにぬねの" },
    { id: "321", text: "はひふへほ" },
  ];
  return (
    <>
      <MainPageHeader />
      <Container padding="32px 0px">
        <MainFeatureBox title="Self Debate" graph="ここにグラフを表示" contents={contents} />
        <MainFeatureBox title="Fast Thinking" graph="ここにグラフを表示" contents={contents} />
        <MuiGrid container>
          <MuiGrid item xs={12}>
            <StyledH2>話題のお題</StyledH2>
          </MuiGrid>
          <MuiGrid xs={12} sm={6} item>
            <StyledItemBox>
              <StyledH3>Self Debate</StyledH3>
            </StyledItemBox>
          </MuiGrid>
          <MuiGrid xs={12} sm={6} item>
            <StyledItemBox>
              <StyledH3>Fast Thinking</StyledH3>
            </StyledItemBox>
          </MuiGrid>
        </MuiGrid>
      </Container>
    </>
  );
};

export default Main;

const StyledH2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;
const StyledH3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;
const StyledItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
