import React from "react";
import styled from "styled-components";

import { useSelector } from "../../../store";
import { BasicStepper } from "../../molecules/stepper";
import { Container } from "../../molecules/container";
import { generateNowDateString } from "../../../functions/generateString";
import { FullScreenDialog } from "../../organisms/dialog";
import { AppPageHeader } from "../../organisms/header";

const steps = ["テーマ選択", "主張"];

const FastThinking: React.FC = React.memo(() => {
  //   const state = useSelector(selfDebateSelector);
  //   const activeStep = state.activeStep;
  return (
    <StyledContainer>
      <AppPageHeader title="Fast thinking" />
      <Container padding={"92px 0 32px"}>
        <StyledStepper>{/* <BasicStepper steps={steps} activeStep={activeStep} /> */}</StyledStepper>
        <StyledStep>
          {/* <StyledDate>{generateNowDateString()}</StyledDate>
          <div className="h-module-spacer--sm" />
          {activeStep === 0 ? <SelectTheme /> : activeStep === 1 && <Agree />} */}
        </StyledStep>
      </Container>
      <FullScreenDialog
        color="#faa50a"
        text="解決したい問題や悩みなどを設定しましょう"
        placeholder="例）勉強に集中できないのはなぜか？"
      />
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
