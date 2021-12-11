import React from "react";
import styled from "styled-components";
import { Grid as MuiGrid, Paper as MuiPaper } from "@mui/material";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import HistoryIcon from "@mui/icons-material/History";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";

import { PrimaryButton } from "../../atoms/button";
import { ButtonWithIcon } from "../../molecules/button-with-icon";
import { Container } from "../../molecules/container";
import { AppHeader } from "../../organisms/header";
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

const Main: React.FC = () => {
  return (
    <StyledMain>
      <AppHeader />
      <Container padding={"124px 0 64px"}>
        <MuiGrid container spacing={4}>
          <MuiGrid item xs={12}>
            <StyledSectionTitleWrap>
              <MenuBookTwoToneIcon fontSize="medium" />
              <StyledSectionTitle>トレーニングメニュー</StyledSectionTitle>
            </StyledSectionTitleWrap>
          </MuiGrid>

          <MuiGrid item xs={12} md={6}>
            <MuiPaper elevation={4} sx={{ color: "#555", padding: "32px 16px" }}>
              <StyledFeatureTitle>Self debate</StyledFeatureTitle>
              <StyledFeatureTextBox>
                <StyledFeatureText>
                  <div>
                    <CheckCircleOutlineSharpIcon />
                    <div className="w-module-spacer--xxs" />
                    <span>人に自分の意見を主張するためのトレーニング</span>
                  </div>
                  <br />
                  <br />
                  設定したテーマについて、自分自身で肯定派と否定派の両方を考え討論することで、偏見や飛躍した考えを修正することができ、相手に「なるほど！」と思ってもらえる意見が言えるようになります。
                </StyledFeatureText>
                <StyledFeatureLinkWrap>
                  <ButtonWithIcon
                    icon={InfoOutlinedIcon}
                    text="使い方を確認する →"
                    path="./tutorial/selfdebate"
                    background="#fff"
                    border="1px solid #33B6B1"
                    color="#33b6b1"
                    fontSize="12px"
                    iconSize="small"
                    padding="2px 4px"
                    radius="4px"
                    spacing="xxs"
                  />
                </StyledFeatureLinkWrap>
              </StyledFeatureTextBox>
              <PrimaryButton
                text="セルフディベートを始める →"
                color="#fff"
                background="#33b6b1"
                radius="4px"
                fullWidth
              />
            </MuiPaper>
          </MuiGrid>

          <MuiGrid item xs={12} md={6}>
            <MuiPaper elevation={4} sx={{ color: "#555", padding: "32px 16px" }}>
              <StyledFeatureTitle>Fast thinking</StyledFeatureTitle>
              <StyledFeatureTextBox>
                <StyledFeatureText>
                  <div>
                    <CheckCircleOutlineSharpIcon />
                    <div className="w-module-spacer--xxs" />
                    <span>瞬時に最適解を導くためのトレーニング</span>
                  </div>
                  <br />
                  <br />
                  設定したテーマについて、瞬発的に思い浮かんだ原因や解決策を書き出し、思考スピードの向上を図ります。
                  <br />
                  また、悩みや不安などをテーマに設定することで頭の中をクリアにし、実行力を身につけることができます。
                  <br />
                </StyledFeatureText>
                <StyledFeatureLinkWrap>
                  <ButtonWithIcon
                    icon={InfoOutlinedIcon}
                    text="使い方を確認する →"
                    path="./tutorial/fastthinking"
                    background="#fff"
                    border="1px solid #71a5f3"
                    color="#71a5f3"
                    fontSize="12px"
                    iconSize="small"
                    padding="2px 4px"
                    radius="4px"
                    spacing="xxs"
                  />
                </StyledFeatureLinkWrap>
              </StyledFeatureTextBox>
              <PrimaryButton
                text="ファストシンキングを始める →"
                color="#fff"
                background="#71a5f3"
                radius="4px"
                fullWidth
              />
            </MuiPaper>
          </MuiGrid>
        </MuiGrid>
        <div className="h-module-spacer--xxl" />

        <MuiGrid container spacing={4}>
          <MuiGrid item xs={12}>
            <StyledSectionTitleWrap>
              <HistoryIcon fontSize="medium" />
              <StyledSectionTitle>トレーニング記録</StyledSectionTitle>
            </StyledSectionTitleWrap>
          </MuiGrid>
          <MuiGrid item xs={12}>
            {/* {data ? (
              data.map((data) => (
                <>
                  <MainFeatureBox
                    key={data.id}
                    title={data.title}
                    graphData={data.graphData}
                    contents={data.contents}
                  />
                  <div className="h-module-spacer--xl" />
                </>
              ))
            ) : (
              <h3>まだデータが登録されていません</h3>
            )} */}
          </MuiGrid>
        </MuiGrid>
      </Container>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  color: #555;
  background: #f8fbfe;
`;

const StyledSectionTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;
const StyledSectionTitle = styled.h2`
  font-size: 20px;
  display: inline-block;
`;

const StyledFeatureTitle = styled.h3`
  font-family: "Sriracha", cursive;
  font-size: 32px;
  margin-bottom: 32px;
  text-align: center;
`;

const StyledFeatureTextBox = styled.div`
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  margin-bottom: 32px;
  padding: 0 8px;
`;

const StyledFeatureText = styled.h4`
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-weight: 600;
    }
  }
`;

const StyledFeatureLinkWrap = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: right;
`;
