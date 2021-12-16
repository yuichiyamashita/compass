import React from "react";
import styled from "styled-components";

import { useSelector } from "../../../store";
import { selfDebateSelector } from "../../../Selectors";
import { BasicStepper } from "../../molecules/stepper";
import { Container } from "../../molecules/container";
import { generateNowDateString } from "../../../functions/generateString";
import { FullScreenDialog, SelectTheme, Affirmative } from "../../organisms/selfdebate";
import { AppPageHeader } from "../../organisms/header";

// Stepperのコンテンツ
const steps = ["テーマ", "肯定", "否定", "結論"];

const Selfdebate: React.FC = () => {
  const state = useSelector(selfDebateSelector);
  const activeStep = state.activeStep;

  return (
    <StyledContainer>
      <AppPageHeader />
      <Container padding={"92px 0 32px"}>
        <StyledStepper>
          <BasicStepper steps={steps} activeStep={activeStep} />
        </StyledStepper>
        <StyledStep>
          <StyledDate>{generateNowDateString()}</StyledDate>
          <div className="h-module-spacer--sm" />
          {activeStep === 0 ? (
            <SelectTheme />
          ) : activeStep === 1 ? (
            <Affirmative />
          ) : (
            activeStep === 2 && <div>反対派</div>
          )}
        </StyledStep>
      </Container>
      <FullScreenDialog />
    </StyledContainer>
  );
};

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
