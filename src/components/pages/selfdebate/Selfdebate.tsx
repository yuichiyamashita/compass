import React, { useState, useCallback } from "react";
import styled from "styled-components";

import { useSelector } from "../../../store";
import { selfDebateSelector } from "../../../Selectors";
import { BasicStepper } from "../../molecules/stepper";
import { Container } from "../../molecules/container";
import { AppHeader } from "../../organisms/header";
import { generateNowDateString } from "../../../functions/generateString";
import { PrimaryButton } from "../../atoms/button";
import { FullScreenDialog } from "../../organisms/dialog";

// ステッパーのコンテンツ
const steps = ["テーマ選択", "肯定派", "否定派", "結論"];

const Selfdebate: React.FC = () => {
  const state = useSelector(selfDebateSelector);
  const isInputedTheme = state.theme.isInputed;
  const theme = state.theme.theme;

  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);

  // Stepper関連の処理
  const handleNext = useCallback(() => {
    // テーマを選択済みの場合のみに押下できるように条件を追加
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, []);
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  // ===================================

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // useEffect(() => {
  // 次のステップを表示する処理
  // }, [activeStep])

  return (
    <StyledContainer>
      <AppHeader />
      <Container padding={" 96px 0 64px"}>
        <StyledTitle>Self debate</StyledTitle>
        <StyledDate>{generateNowDateString()}</StyledDate>
        <StyledStepper>
          <BasicStepper steps={steps} activeStep={activeStep} />
        </StyledStepper>
        {isInputedTheme ? (
          <StyledThemeWrap>
            <span>テーマ：</span>
            <div className="h-module-spacer--xs" />
            <StyledTheme>{theme}</StyledTheme>
            <PrimaryButton
              text="テーマを変更する"
              color="#33b6b1"
              border="1px solid #33b6b1"
              radius="4px"
              onClick={handleClick}
            />
          </StyledThemeWrap>
        ) : (
          <StyledThemeWrap>
            <StyledSelectTheme>討論するテーマを選んでください。</StyledSelectTheme>
            <PrimaryButton
              text="テーマを選ぶ →"
              color="#33b6b1"
              border="1px solid #33b6b1"
              radius="4px"
              onClick={handleClick}
            />
          </StyledThemeWrap>
        )}
        <PrimaryButton text="開始" color="#fff" background="#33b6b1" radius="4px" fullWidth onClick={handleNext} />
      </Container>
      <FullScreenDialog title="テーマを選択" onClose={handleClose} open={open} />
    </StyledContainer>
  );
};

export default Selfdebate;

const StyledContainer = styled.div`
  background: #f8fbfe;
  color: #555;
  min-height: 100vh;
`;

const StyledTitle = styled.h2`
  font-family: "Sriracha", cursive;
  font-size: 24px;
  margin-bottom: 32px;
`;

const StyledDate = styled.div`
  margin-bottom: 24px;
`;

const StyledStepper = styled.div`
  margin-bottom: 48px;
`;

const StyledThemeWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 48px 0;
`;

const StyledTheme = styled.div`
  color: #555;
  font-size: 18px;
  letter-spacing: 1.5px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const StyledSelectTheme = styled.div`
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 16px;
`;
