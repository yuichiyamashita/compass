import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import { makeStyles } from "@mui/styles";
import { Grid as MuiGrid } from "@mui/material";

import FirstViewImage from "../../../../../assets/images/creative_woman_bl.svg";
import { HoverAnimationButton, PrimaryButton } from "../../../../atoms/button";
import { Container } from "../../../../molecules/container";
import { Flexbox } from "../../../../molecules/layout";

const useStyles = makeStyles(() => ({
  gridContainer: {
    position: "relative",
    height: "100%",
  },
  gridItemLeft: {
    position: "absolute",
    left: "-60%",
    "@media (min-width: 600px)": {
      left: "calc(-33% + 32px)",
    },
    "@media (min-width: 900px)": {
      position: "initial",
      left: 0,
    },
  },
  gridItemRight: {
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)",
    width: "200px",
    "@media (min-width: 600px)": {
      width: "250px",
      right: "32px",
    },
    "@media (min-width: 900px)": {
      position: "initial",
      top: 0,
      margin: 0,
      transform: "translateY(0)",
    },
  },
}));

const FirstView: FC = () => {
  const classes = useStyles();
  return (
    <StyledFirstView>
      <Container>
        <MuiGrid container className={classes.gridContainer}>
          <MuiGrid item md={6} className={classes.gridItemLeft}>
            <StyledImage src={FirstViewImage} alt="frist-view" />
          </MuiGrid>
          <MuiGrid item md={6} className={classes.gridItemRight}>
            <Flexbox justify="center" align="center" direction="column">
              <StyledCopyWriteBox>
                <StyledCopyWriteTitle>超・論理的思考力</StyledCopyWriteTitle>
                <StyledCopyWriteText>
                  自分の意見に自信がない。
                  <br />
                  より良い選択ができるようになりたい。
                  <br />
                  問題解決力を上げたい。
                  <br />
                  自分の主張にもっと説得力を持たせたい。
                  <br />
                  そんなあなたのためのアプリがここにあります。
                </StyledCopyWriteText>
              </StyledCopyWriteBox>
              <StyledPCButtonWrap>
                <HoverAnimationButton href=".signup" text="さっそく始める" color="#ff9800" border="1px solid #ff9800" />
              </StyledPCButtonWrap>
              <StyledButtonWrap>
                <PrimaryButton
                  href="./signup"
                  text="さっそく始める"
                  color="#fff"
                  background="#ff9800"
                  boxShadowColor="#b26a00"
                />
              </StyledButtonWrap>
            </Flexbox>
          </MuiGrid>
        </MuiGrid>
      </Container>
    </StyledFirstView>
  );
};

export default FirstView;

// アニメーションの設定
const slideUpAnimation = keyframes`
0% {
  opacity: 0;
  transform: translateY(30px);
}
75% {
  transform: translateY(-2px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

// コンポーネントの定義
const StyledFirstView = styled.div`
  height: 550px;
  animation: ${slideUpAnimation} 1.2s ease-in-out;

  @media screen and (max-width: 320px) {
    height: 450px;
  }

  @media screen and (min-width: 600px) {
    height: 700px;
  }
`;
const StyledImage = styled.img`
  height: 550px;
  width: 550px;
  opacity: 0.8;

  @media screen and (max-width: 320px) {
    width: 100%;
    height: 450px;
  }

  @media screen and (min-width: 600px) {
    width: calc(100% - 64px);
    height: 700px;
  }

  @media screen and (min-width: 900px) {
    width: 700px;
  }
`;
const StyledCopyWriteBox = styled.dl`
  color: #555;
  text-align: left;
  margin-bottom: 32px;
`;
const StyledCopyWriteTitle = styled.dt`
  text-shadow: 1px 1px 24px #fff;
  font-size: 24px;
  margin-bottom: 16px;
`;
const StyledCopyWriteText = styled.dd`
  text-shadow: 1px 1px 15px #fff;
  font-size: 15px;
  line-height: 1.5;

  @media screen and (min-width: 900px) {
    margin-bottom: 16px;
  }
`;
const StyledPCButtonWrap = styled.div`
  display: none;

  @media screen and (min-width: 900px) {
    display: block;
  }
`;
const StyledButtonWrap = styled.div`
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
