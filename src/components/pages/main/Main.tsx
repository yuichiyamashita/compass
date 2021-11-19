import React, { FC } from "react";
import styled from "styled-components";

import { Grid as MuiGrid } from "@mui/material";

import { Container } from "../../molecules/container";
import { MainPageHeader } from "../../organisms/header";
import { MainFeatureBox } from "../../organisms/mainFeatureBox";

// テストデータ
const data = [
  {
    id: "1",
    title: "Self Debate",
    graphData: {
      labels: ["ビジネス", "プログラミング", "英語", "健康", "お金", "その他"],
      dataset: [25, 10, 15, 35, 40, 50],
    },
    contents: [
      { id: "123", text: "リモートワークは生産性を向上するか" },
      { id: "456", text: "人工知能は人類を超えるか" },
      { id: "789", text: "救急車を利用するのにお金を支払うべきか" },
      { id: "987", text: "バスや電車の優先席の使用をやめるべきか" },
      { id: "654", text: "高等教育の費用は政府が負担するべきか" },
      { id: "321", text: "日本は再生可能エネルギーをいっそう推進するべきか" },
    ],
  },
  {
    id: "2",
    title: "Fast Thinking",
    graphData: {
      labels: ["React", "TypeScript", "HTML/CSS(Sass)", "Python", "PHP", "Firebase", "シュタインズゲート"],
      dataset: [55, 10, 70, 20, 20, 70, 143],
    },
    contents: [
      { id: "123", text: "abcdefg" },
      { id: "456", text: "hijklmn" },
      { id: "789", text: "opqrstu" },
      { id: "987", text: "vwxyz" },
    ],
  },
];

const Main: FC = () => {
  return (
    <>
      <MainPageHeader />
      <Container>
        <div className="h-module-spacer--xxl" />
        {data ? (
          data.map((d) => <MainFeatureBox key={d.id} title={d.title} graphData={d.graphData} contents={d.contents} />)
        ) : (
          <StyledH3>まだデータがありません</StyledH3>
        )}
      </Container>

      <StyledPopularTheme>
        <Container>
          <MuiGrid container>
            <MuiGrid item xs={12}>
              <StyledH2>話題のテーマ</StyledH2>
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
      </StyledPopularTheme>
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
const StyledPopularTheme = styled.div`
  background: #f3f3f3;
`;
