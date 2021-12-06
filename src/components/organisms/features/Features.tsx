import React, { FC } from "react";
import styled, { css, keyframes } from "styled-components";

import mobileImage from "../../../assets/images/mobile.jpg";
import { Container } from "../../molecules/container";
import { PrimaryButton } from "../../atoms/button";

const Features: FC = () => {
  return (
    <StyledContainer>
      <Container align="center">
        <StyledTitle>Features</StyledTitle>

        <StyledFeatureBox>
          <StyledLeftFeatureBoxBg />
          <StyledLeftImageBox>
            <img src={mobileImage} alt="self-debate" />
          </StyledLeftImageBox>
          <StyledLeftTextBox>
            <StyledFeatureTitle>1. Self debate</StyledFeatureTitle>
            <StyledFeatureSubTitle>ー 説得力のある意見を主張する ー</StyledFeatureSubTitle>
            <StyledFeatureText>
              ・セルフディベートとは？
              <br />
              自分自身で肯定と否定の両方を考え討論し、結論を出すことで、偏見や飛躍した考えを修正することができる方法です。
              <br />
              <br />
              ・COMPASSでできること
              <br />
              セルフディベートの作成機能に加えて、ディベート内容を投稿(シェア)したり、他ユーザーの投稿内容を閲覧することができます。
            </StyledFeatureText>
            <StyledButton>
              <PrimaryButton color="#fff" text="さっそく始める >" background="#8bd5da" href="./email-authentication" />
            </StyledButton>
          </StyledLeftTextBox>
        </StyledFeatureBox>

        <StyledFeatureBox>
          <StyledRightFeatureBoxBg />
          <StyledRightImageBox>
            <img src={mobileImage} alt="self-debate" />
          </StyledRightImageBox>
          <StyledRightTextBox>
            <StyledFeatureTitle>2. Fast thinking</StyledFeatureTitle>
            <StyledFeatureSubTitle>ー 瞬時に最適解にたどりつく ー</StyledFeatureSubTitle>
            <StyledFeatureText>
              ・セルフディベートとは？
              <br />
              自分自身で肯定と否定の両方を考え討論し、結論を出すことで、偏見や飛躍した考えを修正することができる方法です。
              <br />
              <br />
              ・COMPASSでできること
              <br />
              セルフディベートの作成機能に加えて、ディベート内容を投稿(シェア)したり、他ユーザーの投稿内容を閲覧することができます。
            </StyledFeatureText>
            <StyledRightButton>
              <PrimaryButton color="#fff" text="さっそく始める >" background="#8bd5da" href="./email-authentication" />
            </StyledRightButton>
          </StyledRightTextBox>
        </StyledFeatureBox>
      </Container>
    </StyledContainer>
  );
};

export default Features;

// アニメーションの設定
const moveImageAnimation = keyframes`
0% {
  transform: translateY(0%);
}
50% {
  transform: translateY(4px);
}
100% {
  transform: translateY(0%);
}
`;

// コンポーネントのスタイルの設定
const StyledContainer = styled.div`
  padding-top: 160px;
`;
const StyledTitle = styled.h2`
  border-bottom: 1px solid #333;
  font-family: "Sriracha";
  font-size: 64px;
  letter-spacing: 6px;
  margin-bottom: 128px;
  display: inline-block;
`;

const StyledFeatureBox = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    height: 768px;
  }
  @media screen and (min-width: 1024px) {
    height: 1024px;
  }
  @media screen and (min-width: 1366px) {
    height: 768px;
  }
  @media screen and (min-width: 1920px) {
    height: 1080px;
  }
`;

export const StyledFeatureBoxBg = css`
  z-index: -1;
  position: absolute;
  background: #ececec;

  // iPad mini, iPad(9.7)
  @media screen and (min-width: 768px) {
    top: 64px;
    height: 560px;
    width: calc(100vw - 16px);
  }
  // width: 1024px ~
  @media screen and (min-width: 1024px) {
    top: 96px;
    width: calc((100vw - 1000px) / 2 + 1000px);
  }
`;
const StyledLeftFeatureBoxBg = styled.div`
  ${StyledFeatureBoxBg};
  right: 0;
`;
const StyledRightFeatureBoxBg = styled.div`
  ${StyledFeatureBoxBg};
  left: 0;
`;

export const StyledImageBox = css`
  position: absolute;
  animation: ${moveImageAnimation} 1s ease-in-out infinite;

  img {
    width: 100%;
  }
  // iPad mini, iPad(9.7)
  @media screen and (min-width: 768px) {
    width: 45%;
  }
  // macbook13インチ
  @media screen and (min-width: 1366px) {
    width: 40%;
  }
  // desktop pc
  @media screen and (min-width: 1920px) {
    width: 45%;
  }
`;
const StyledLeftImageBox = styled.div`
  ${StyledImageBox};
  left: 0;
  img {
    box-shadow: -32px 80px 32px rgba(0, 0, 0, 0.6);
  }
`;
const StyledRightImageBox = styled.div`
  ${StyledImageBox};
  right: 0;
  img {
    box-shadow: 32px 80px 32px rgba(0, 0, 0, 0.6);
  }
`;

export const StyledTextBox = css`
  position: absolute;
  text-align: left;

  // iPad mini, iPad(9.7)
  @media screen and (min-width: 768px) {
    top: 64px;
    height: 560px;
    width: 55%;
    padding: 32px 16px;
  }
  // VWが1024px以上
  @media screen and (min-width: 1024px) {
    top: 96px;
    padding: 64px 32px;
  }
`;
const StyledLeftTextBox = styled.div`
  ${StyledTextBox};
  right: 0;
`;
const StyledRightTextBox = styled.div`
  ${StyledTextBox};
  left: 0;
`;

const StyledFeatureTitle = styled.dt`
  font-family: "Sriracha", cursive;
  letter-spacing: 3px;
  margin-bottom: 8px;
  border-bottom: 1px solid #333;

  // iPad mini, iPad(9.7)
  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
  // VWが1024px以上
  @media screen and (min-width: 1024px) {
    font-size: 56px;
  }
`;

const StyledFeatureSubTitle = styled.dt`
  font-weight: 600;
  margin-bottom: 32px;
  letter-spacing: 3px;
  text-align: center;
  color: #555;
`;

const StyledFeatureText = styled.dd`
  font-size: 18px;
  letter-spacing: 3px;
  line-height: 1.5;
  margin-bottom: 32px;
  color: #555;
`;

const StyledButton = styled.div`
  text-align: right;
`;
const StyledRightButton = styled.div`
  text-align: left;
`;
