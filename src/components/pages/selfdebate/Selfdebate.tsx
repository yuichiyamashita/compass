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
const steps = ["テーマ", "賛成", "反対", "結論"];

const Selfdebate: React.FC = () => {
  const state = useSelector(selfDebateSelector);
  const activeStep = state.activeStep;
  const dialog = state.dialog;

  return (
    <StyledContainer>
      <AppPageHeader />
      <Container padding={"92px 0 32px"}>
        <StyledStepper>
          <BasicStepper steps={steps} activeStep={activeStep} />
        </StyledStepper>
        <StyledStep>
          <StyledDate>{generateNowDateString()}</StyledDate>
          {activeStep === 0 ? <SelectTheme /> : activeStep === 1 ? <Affirmative /> : null}
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
  height: 100vh;
`;

const StyledDate = styled.div`
  margin-bottom: 32px;
`;

const StyledStepper = styled.div`
  margin-bottom: 32px;
`;

const StyledStep = styled.div`
  background: #fff;
  box-shadow: 0 0 8px #ececec;
  padding: 16px;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;
