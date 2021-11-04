import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

import FirstViewImage from "../../../../../assets/images/creative_woman_bl.svg";
import { HoverAnimationButton, PrimaryButton } from "../../../../atoms/button";
import { Container } from "../../../../molecules/container";
import { Flexbox } from "../../../../molecules/layout";

const useStyles = makeStyles(() => ({
  container: {
    "@media (max-width: 420px)": {
      position: "relative",
      height: "100%",
    },
  },
  itemLeft: {
    "@media (max-width: 420px)": {
      position: "absolute",
      minWidth: "150%",
      left: "-58%",
      top: "50%",
      transform: "translateY(-50%)",
    },
  },
  itemRight: {
    "@media (max-width: 420px)": {
      position: "absolute",
      minWidth: "calc(100% / 1.618 + 16px)",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
    },
  },
}));

const FirstView: FC = () => {
  const classes = useStyles();
  return (
    <StyledFirstView>
      <Container>
        <Grid container className={classes.container}>
          <Grid item xs={8} className={classes.itemLeft}>
            <StyledImage src={FirstViewImage} alt="frist-view" />
          </Grid>
          <Grid item xs={4} className={classes.itemRight}>
            <Flexbox justify="center" align="center" direction="column">
              <StyledCopyWriteBox>
                <StyledCopyWriteTitle>超・論理的思考力</StyledCopyWriteTitle>
                <StyledCopyWriteText>
                  ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。
                </StyledCopyWriteText>
              </StyledCopyWriteBox>
              <StyledPCButtonWrap>
                <HoverAnimationButton
                  href=".signup"
                  text="さっそく始める"
                  color="#555"
                  border="1px solid black"
                  background="linear-gradient(to right, rgba(255, 152, 0, 0.7), 20%,
                                                    rgba(255, 172, 51, 0.6),80%,
                                                    rgba(255, 152, 0, 0.7));"
                />
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
          </Grid>
        </Grid>
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
  height: 600px;
  animation: ${slideUpAnimation} 1.2s ease-in-out;
  @media screen and (max-width: 768px) {
    height: 500px;
  }
`;
const StyledImage = styled.img`
  height: 600px;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 500px;
  }
`;
const StyledCopyWriteBox = styled.dl`
  margin-bottom: 48px;
  @media screen and (max-width: 420px) {
    margin-bottom: 32px;
  }
`;
const StyledCopyWriteTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;
const StyledCopyWriteText = styled.p`
  line-height: 1.5;
  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;
const StyledPCButtonWrap = styled.div`
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
const StyledButtonWrap = styled.div`
  display: none;
  @media screen and (max-width: 420px) {
    display: block;
  }
`;
