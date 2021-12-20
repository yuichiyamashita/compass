import React, { useState, useCallback } from "react";
import styled from "styled-components";

import { BasicStepper } from "../../organisms/stepper";
import { Container } from "../../molecules/container";
import { generateNowDateString } from "../../../functions/generateString";
import { AppPageHeader } from "../../organisms/header";
import { SelectFastThikingTheme } from "../../organisms/fastThinking";

const steps = ["テーマ選択", "主張"];

const FastThinking: React.FC = React.memo(() => {
  const [activeStep, setActiveStep] = useState(0);

  const handleClickMoveStep = useCallback((step: number) => {
    setActiveStep(step);
  }, []);

  return (
    <StyledContainer>
      <AppPageHeader title="Fast thinking" />
      <Container padding={"92px 0 32px"}>
        <StyledStepper>
          <BasicStepper steps={steps} activeStep={activeStep} />
        </StyledStepper>
        <StyledStep>
          <StyledDate>{generateNowDateString()}</StyledDate>
          <div className="h-module-spacer--sm" />
          {activeStep === 0 ? (
            <SelectFastThikingTheme />
          ) : activeStep === 1 ? (
            <div>
              <button onClick={() => handleClickMoveStep(0)}>戻る</button>
              <button onClick={() => handleClickMoveStep(2)}>終了</button>
            </div>
          ) : (
            activeStep === 2 && <div>aaaaaa</div>
          )}
        </StyledStep>
      </Container>
    </StyledContainer>
  );
});

export default FastThinking;

const StyledContainer = styled.div`
  position: relative;
  background: #f8fbfe;
  color: #555;
  min-height: 100vh;
`;

const StyledStepper = styled.div`
  margin-bottom: 32px;
`;

const StyledDate = styled.div`
  font-family: "Klee One", cursive;
`;

const StyledStep = styled.div`
  background: #fff;
  box-shadow: 0 0 16px #ccc;
  padding: 16px 8px;

  @media screen and (min-width: 768px) {
    padding: 32px 16px;
  }
`;
