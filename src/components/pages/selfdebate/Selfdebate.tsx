import React from "react";
import styled from "styled-components";

import { useSelector } from "../../../store";
import { selfDebateSelector } from "../../../Selectors";
import { BasicStepper } from "../../molecules/stepper";
import { Container } from "../../molecules/container";
import { AppHeader } from "../../organisms/header";
import { generateNowDateString } from "../../../functions/generateString";
import { FullScreenDialog } from "../../organisms/selfdebate";
import SelectTheme from "../../organisms/selfdebate/SelectTheme";

// Stepperのコンテンツ
const steps = ["テーマ選択", "肯定派", "否定派", "結論"];

const Selfdebate: React.FC = () => {
  const state = useSelector(selfDebateSelector);
  const activeStep = state.activeStep;

  return (
    <StyledContainer>
      <AppHeader />
      <Container padding={" 96px 0 64px"}>
        <StyledTitle>Self debate</StyledTitle>
        <StyledDate>{generateNowDateString()}</StyledDate>
        <StyledStepper>
          <BasicStepper steps={steps} activeStep={activeStep} />
        </StyledStepper>
        {activeStep === 0 ? <SelectTheme /> : activeStep === 1 ? <div>aaa</div> : null}
      </Container>
      <FullScreenDialog />
    </StyledContainer>
  );
};

export default Selfdebate;

const StyledContainer = styled.div`
  background: #f8fbfe;
  color: #555;
  height: 100vh;
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
