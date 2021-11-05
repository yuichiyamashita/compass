import React, { FC } from "react";
import styled from "styled-components";
import { Grid as MuiGrid } from "@mui/material";

import selfDebateImage from "../../../../../assets/images/self_debate.svg";
import deepenThinkImage from "../../../../../assets/images/deepen_think.svg";
import { BorderSubTitle } from "../../../../atoms/typography";
import { Container } from "../../../../molecules/container";

const Features: FC = () => {
  return (
    <StyledFeatures>
      <Container>
        <BorderSubTitle
          title="FEATURES"
          fontSize="24px"
          fontWeight={600}
          letterSpacing="3px"
          borderWidth="50px"
          borderHeight="2px"
          borderColor="#555"
          margin="0 0 48px 0"
        />
        <MuiGrid container>
          <MuiGrid item xs sm={6}>
            <StyledTypographyBox>
              <StyledTitle>
                SELF DEBATE
                <br />
                <span>1人で答えを導き出す</span>
              </StyledTitle>
              <StyledText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ullam officiis perferendis magni
                commodi explicabo modi voluptas alias ducimus inventore? Rerum eius atque nihil quasi, ab itaque unde
                omnis soluta.
              </StyledText>
            </StyledTypographyBox>
          </MuiGrid>
          <MuiGrid item xs sm={6}>
            <StyledImage>
              <img src={selfDebateImage} alt="self-debate" />
            </StyledImage>
          </MuiGrid>
        </MuiGrid>
        <div className="h-module-spacer--xl" />
        <MuiGrid container>
          <MuiGrid item xs sm={6}>
            <StyledTypographyBox>
              <StyledTitle>
                DEEPEN THINK
                <br />
                <span>1つのことを深く考える</span>
              </StyledTitle>
              <StyledText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ab asperiores doloribus, voluptatem
                accusantium rerum molestiae molestias commodi odio tempore magni dicta soluta deserunt sapiente
                quisquam, quis officiis temporibus reprehenderit.
              </StyledText>
            </StyledTypographyBox>
          </MuiGrid>
          <MuiGrid item xs sm={6}>
            <StyledImage>
              <img src={deepenThinkImage} alt="self-debate" />
            </StyledImage>
          </MuiGrid>
        </MuiGrid>
      </Container>
    </StyledFeatures>
  );
};

export default Features;

const StyledFeatures = styled.div`
  padding: 48px 0;
  background: #f9f9f9;
`;

const StyledTypographyBox = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 304px;
  height: 304px;
  border: 1px solid #8bd5da;
  border-radius: 100%;
  color: #8bd5da;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    margin-left: auto;
    margin-right: 32px;
  }
`;

const StyledTitle = styled.dt`
  font-size: 20px;
  span {
    font-size: 14px;
  }
`;

const StyledText = styled.dd`
  padding: 16px;
`;

const StyledImage = styled.div`
  width: 304px;
  height: 304px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    margin-right: auto;
    margin-left: 32px;
  }
  img {
    width: 100%;
    hegith: 100%;
  }
`;
