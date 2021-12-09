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
          <StyledLeftTextBox>
            <StyledFeatureTitle>1. Self debate</StyledFeatureTitle>
            <StyledFeatureSubTitle>自分の意見に説得力を持たせる</StyledFeatureSubTitle>
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
              <PrimaryButton color="#fff" text="さっそく始める >" background="#673ab7" path="./email-authentication" />
            </StyledButton>
          </StyledLeftTextBox>
          <StyledLeftImageBox>
            <img src={mobileImage} alt="self-debate" />
          </StyledLeftImageBox>
        </StyledFeatureBox>

        <StyledFeatureBox>
          <StyledRightFeatureBoxBg />
          <StyledRightTextBox>
            <StyledFeatureTitle>2. Fast thinking</StyledFeatureTitle>
            <StyledFeatureSubTitle>瞬時に最適解にたどりつく</StyledFeatureSubTitle>
            <StyledFeatureText>
              ・ファストシンキングとは？
              <br />
              自分自身で肯定と否定の両方を考え討論し、結論を出すことで、偏見や飛躍した考えを修正することができる方法です。
              <br />
              <br />
              ・COMPASSでできること
              <br />
              セルフディベートの作成機能に加えて、ディベート内容を投稿(シェア)したり、他ユーザーの投稿内容を閲覧することができます。
            </StyledFeatureText>
            <StyledRightButton>
              <PrimaryButton color="#fff" text="さっそく始める >" background="#673ab7" path="./email-authentication" />
            </StyledRightButton>
          </StyledRightTextBox>
          <StyledRightImageBox>
            <img src={mobileImage} alt="self-debate" />
          </StyledRightImageBox>
        </StyledFeatureBox>
      </Container>
    </StyledContainer>
  );
};

export default Features;

// アニメーションの設定
const moveLeftImageAnimation = keyframes`
0% {
  transform: translateY(0%);
}
50% {
  transform: translateY(4px);
  box-shadow: -32px 76px 32px rgba(0, 0, 0, 0.7);
}
100% {
  transform: translateY(0%);
}
`;
const moveRightImageAnimation = keyframes`
0% {
  transform: translateY(0%);
}
50% {
  transform: translateY(4px);
  box-shadow: 32px 76px 32px rgba(0, 0, 0, 0.7);
}
100% {
  transform: translateY(0%);
}
`;

// コンポーネントのスタイルの設定
const StyledContainer = styled.div`
  padding-top: calc(8vw + 160px);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-top: 8vw solid #23133e;
    border-right: 100vw solid transparent;
  }
`;

const StyledTitle = styled.h2`
  border-bottom: 1px solid #333;
  font-family: "Sriracha";
  font-size: 64px;
  letter-spacing: 6px;
  margin-bottom: 160px;
  display: inline-block;

  @media screen and (max-width: 414px) {
    font-size: 48px;
  }
`;

const StyledFeatureBox = styled.div`
  position: relative;

  @media screen and (max-width: 320px) {
    height: calc(568px * 2);
    margin-bottom: 160px;
  }
  @media screen and (min-width: 375px) {
    height: calc(667px * 2);
    margin-bottom: 128px;
  }
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
  position: absolute;
  background: #efefef;
  box-shadow: 2px 2px 12px #ccc;

  @media screen and (max-width: 414px) {
    display: none;
  }
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
  overflow: hidden;
  background: #000;
  width: 100%;

  img {
    width: 100%;
  }
  @media screen and (min-width: 375px) {
    margin-bottom: 80px;
  }
  // iPad mini, iPad(9.7)
  @media screen and (min-width: 768px) {
    position: absolute;
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
  animation: ${moveLeftImageAnimation} 2s ease-in-out infinite;
  box-shadow: -32px 80px 32px rgba(0, 0, 0, 0.6);
`;
const StyledRightImageBox = styled.div`
  ${StyledImageBox};
  right: 0;
  animation: ${moveRightImageAnimation} 2s ease-in-out infinite;
  box-shadow: 32px 80px 32px rgba(0, 0, 0, 0.6);
  img {
    transform: rotateZ(11deg);
  }
`;

export const StyledTextBox = css`
  text-align: left;

  @media screen and (min-width: 320px) {
    background: #ececec;
    padding: 32px 8px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 375px) {
    padding: 32px 16px;
  }
  // iPad mini, iPad(9.7)
  @media screen and (min-width: 768px) {
    position: absolute;
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

  @media screen and (min-width: 320px) {
    font-size: 32px;
  }
  @media screen and (min-width: 375px) {
    font-size: 40px;
  }

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
  margin-bottom: 48px;
  color: #555;
`;

const StyledButton = styled.div`
  text-align: right;
`;
const StyledRightButton = styled.div`
  text-align: left;
`;
