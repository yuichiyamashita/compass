import React, { FC } from "react";
import styled from "styled-components";
import { Grid as MuiGrid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import mobileImage from "../../../assets/images/mobile.jpg";
import { BorderH2Title } from "../../atoms/typography";
import { Container } from "../../molecules/container";
import { PrimaryButton } from "../../atoms/button";
import { MuiTheme } from "../../../assets/material-ui";

const useStyles = makeStyles(() => ({
  textWrap: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#333",
  },
  image: {
    height: "100%",
    background: "#000",
    boxShadow: "-16px 32px 32px rgba(0, 0, 0, 0.6)",
    overflow: "hidden",
    [MuiTheme.breakpoints.down("sm")]: {
      // display: "none",
    },
    "& img": {
      width: "100%",
    },
  },
}));

const Features: FC = () => {
  const classes = useStyles();
  return (
    <StyledFeatures>
      <Container align="center">
        <BorderH2Title
          title="FEATURES"
          fontSize="32px"
          letterSpacing="3px"
          borderWidth="90px"
          borderHeight="1px"
          color="#333"
        />

        <StyledFeatureItemBox>
          <StyledFeatureItemBoxBg />
          <MuiGrid container>
            <MuiGrid item xs={12} sm={6} md={5} className={classes.image}>
              <img src={mobileImage} alt="self-debate" />
            </MuiGrid>
            <MuiGrid item xs={12} sm={6} md={7} className={classes.textWrap}>
              <StyledTextWrap>
                <StyledTitle>1. Self debate</StyledTitle>
                <StyledTitleSub>肯定と否定の両方の立場で考え、結論を導く</StyledTitleSub>
                <StyledText>
                  1つのテーマに対して、自分自身で肯定派と否定派の両方を考えて討論するトレーニングです。
                  <br />
                  人に自分の意見を伝えるときなど、「主張」する場合に役に立ちます。
                </StyledText>
                <StyledButton>
                  <PrimaryButton color="#fff" text="もっと詳しく" background="#8bd5da" />
                </StyledButton>
              </StyledTextWrap>
            </MuiGrid>
          </MuiGrid>
        </StyledFeatureItemBox>

        <div className="h-module-spacer--xxl" />

        <StyledRightFeatureItemBox>
          <StyledRightFeatureItemBoxBg />
          <StyledRightImage>
            <img src={mobileImage} alt="self-debate" />
          </StyledRightImage>
          <StyledRightTypographyBox>
            <StyledRightTitle>2. Fast thinking</StyledRightTitle>
            <StyledRightTitleSub>速く深く考え、結論を導く</StyledRightTitleSub>
            <StyledRightText>
              あるテーマについて時間内に箇条書きで自分の考えを書き出し、さらにその書き出したものをテーマとして深ぼることを繰り返すことで、速く・深く考え抜かれた結論を導くトレーニングです。
            </StyledRightText>
            <StyledRightButton>
              <PrimaryButton color="#fff" text="もっと詳しく" background="#8bd5da" />
            </StyledRightButton>
          </StyledRightTypographyBox>
        </StyledRightFeatureItemBox>
      </Container>
    </StyledFeatures>
  );
};

export default Features;

const StyledFeatures = styled.div`
  padding: 64px 0;
  overflow: hidden;
  @media screen and (min-width: 600px) {
    padding: 128px 0;
  }
`;

// 左寄せコンテンツのスタイル設定
const StyledFeatureItemBox = styled.div`
  position: relative;
  margin-top: 64px;
  text-align: left;

  // iPhoneSE
  @media screen and (max-width: 320px) {
    // height: 496px;
  }
  // Xperia
  @media screen and (min-width: 360px) {
    // height: 568px;
  }
  // iPhone6/7/8
  @media screen and (min-width: 375px) {
    // height: 595px;
  }
  // iPhone6/7/8 Plus
  @media screen and (min-width: 414px) {
    // height: 668px;
  }
  // iPad mini, iPad(9.7)
  @media screen and (min-width: 768px) {
    // height: 952px;
  }
  // macbook13インチ
  @media screen and (min-width: 1366px) {
    // height: 720px;
  }
`;

const StyledFeatureItemBoxBg = styled.div`
  z-index: -1;
  position: absolute;
  top: 96px;
  right: 0;
  width: 100vw;
  background: #ececec;

  // iPad mini, iPad(9.7)
  @media screen and (min-width: 768px) {
    height: 568px;
  }
  // iPad pro
  @media screen and (min-width: 1024px) {
    height: 446px;
  }
`;

const StyledTypographyBox = styled.dl`
  position: absolute;
  width: 55%;
  right: 0;
  top: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #333;
  padding: 64px 32px;
`;

const StyledTextWrap = styled.div`
  // iPad mini, iPad(9.7)
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 96px;
    padding: 64px 32px;
  }
`;

const StyledTitle = styled.dt`
  font-size: 64px;
  font-family: "Sriracha", cursive;
  letter-spacing: 3px;
  margin-bottom: 8px;
  border-bottom: 1px solid #333;
`;

const StyledTitleSub = styled.dt`
  font-weight: 600;
  margin-bottom: 32px;
  letter-spacing: 3px;
`;

const StyledText = styled.dd`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 3px;
  line-height: 1.5;
  margin-bottom: 32px;
`;

const StyledImage = styled.div`
  position: absolute;
  height: 100%;
  background: #000;
  box-shadow: -16px 32px 32px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  width: 45%;

  img {
    position: absolute;
    bottom: -90px;
    left: -45px;
    width: 120%;
    height: 120%;
  }
`;

const StyledButton = styled.div`
  text-align: right;
`;

// 右寄せコンテンツのスタイル設定
const StyledRightFeatureItemBox = styled.div`
  position: relative;
  height: 720px;
  text-align: left;
`;

const StyledRightFeatureItemBoxBg = styled.div`
  position: absolute;
  top: 96px;
  left: 0;
  width: 100vw;
  height: 446px;
  background: #ececec;
`;

const StyledRightTypographyBox = styled.dl`
  position: absolute;
  width: 55%;
  top: 96px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #333;
  padding: 64px 0px 64px 32px;
`;

const StyledRightTitle = styled.dt`
  font-size: 64px;
  font-family: "Sriracha", cursive;
  letter-spacing: 3px;
  margin-bottom: 8px;
  border-bottom: 1px solid #333;
`;

const StyledRightTitleSub = styled.dt`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 32px;
  letter-spacing: 3px;
`;

const StyledRightText = styled.dd`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 3px;
  line-height: 1.5;
  margin-bottom: 32px;
`;

const StyledRightImage = styled.div`
  position: absolute;
  width: 45%;
  right: 0;
  height: 100%;
  background: #000;
  box-shadow: 32px 48px 32px rgba(0, 0, 0, 0.6);
  overflow: hidden;

  img {
    position: absolute;
    bottom: -90px;
    right: -45px;
    width: 120%;
    height: 120%;
    transform: rotateZ(12deg);
  }
`;

const StyledRightButton = styled.div`
  position: absolute;
  left: 32px;
  bottom: 0;
`;
