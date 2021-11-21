import React, { FC } from "react";
import styled from "styled-components";

import { Grid as MuiGrid } from "@mui/material";

import { Container } from "../../molecules/container";
import { MainPageHeader } from "../../organisms/header";
import { MainFeatureBox } from "../../organisms/mainFeatureBox";

// テストデータ
// labelはmax8文字と6個までの登録の制限をかける
// ラベルの付いていないデータはその他にまとめる
const data = [
  {
    id: "1",
    title: "Self Debate",
    graphData: [
      { label: "ビジネス", data: 25 },
      { label: "プログラミング", data: 10 },
      { label: "英語", data: 15 },
      { label: "健康", data: 35 },
      { label: "お金", data: 40 },
      { label: "その他", data: 53 },
    ],
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
    graphData: [
      { label: "メイドラゴン", data: 25 },
      { label: "異世界食堂", data: 10 },
      { label: "ホロライブ", data: 15 },
      { label: "月が導く異世界道中", data: 35 },
      { label: "魔女の旅々", data: 40 },
      { label: "オーバーロード", data: 53 },
      { label: "その他", data: 81 },
    ],
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
        <div className="h-module-spacer--xl" />
        {data ? (
          data.map((d) => (
            <>
              <MainFeatureBox key={d.id} title={d.title} graphData={d.graphData} contents={d.contents} />
              <div className="h-module-spacer--xl" />
            </>
          ))
        ) : (
          <StyledH3>まだデータがありません</StyledH3>
        )}
      </Container>

      <StyledPopularTheme>
        <Container>
          <div className="h-module-spacer--xl" />
          <MuiGrid container spacing={8}>
            <MuiGrid item xs={12}>
              <StyledH2>コミュニティー</StyledH2>
            </MuiGrid>
            <MuiGrid xs={12} sm={6} item>
              <StyledItemBox>
                <StyledH3>人気のテーマ</StyledH3>
                <ul>
                  <li>裁判員制度は廃止されるべきか</li>
                  <li>定年退職制度は廃止されるべきか</li>
                  <li>高等教育を義務教育化するべきか</li>
                  <li>日本は核兵器を持つべきか</li>
                  <li>コロナが終息してもマスクはつけ続けるべきか</li>
                  <li>日本は外国人労働者をもっと受け入れるべきか</li>
                </ul>
              </StyledItemBox>
            </MuiGrid>
            <MuiGrid xs={12} sm={6} item>
              <StyledItemBox>
                <StyledH3>閲覧数が多い</StyledH3>
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
  font-size: 32px;
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
  background: #f9f9f9;
  color: #666;
`;
