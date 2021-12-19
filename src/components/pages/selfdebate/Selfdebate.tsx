import React, { useState, useCallback } from "react";
import styled from "styled-components";

import { BasicStepper } from "../../molecules/stepper";
import { Container } from "../../molecules/container";
import { generateNowDateString } from "../../../functions/generateString";
import { SelectSelfDebateTheme, PositiveOpinion, NegativeOpinion } from "../../organisms/selfdebate";
import { AppPageHeader } from "../../organisms/header";

// Stepperのコンテンツ
const steps = ["テーマ", "肯定", "否定", "結論"];

const Selfdebate: React.FC = React.memo(() => {
  const [activeStep, setActiveStep] = useState(0);

  const handleClickMoveStep = useCallback((step: number) => {
    setActiveStep(step);
  }, []);

  return (
    <StyledContainer>
      <AppPageHeader title="Self debate" />
      <Container padding={"92px 0 32px"}>
        <StyledStepper>
          <BasicStepper steps={steps} activeStep={activeStep} />
        </StyledStepper>
        <StyledStep>
          <StyledDate>{generateNowDateString()}</StyledDate>
          <div className="h-module-spacer--sm" />
          {activeStep === 0 ? (
            <SelectSelfDebateTheme />
          ) : activeStep === 1 ? (
            <PositiveOpinion handleClickMoveStep={handleClickMoveStep} />
          ) : activeStep === 2 ? (
            <NegativeOpinion handleClickMoveStep={handleClickMoveStep} />
          ) : (
            activeStep === 3 && <div>結論</div>
          )}
        </StyledStep>
      </Container>
    </StyledContainer>
  );
});

export default Selfdebate;

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
