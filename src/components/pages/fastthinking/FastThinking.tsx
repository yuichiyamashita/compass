import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { InputThemeType } from "../../../types/mainFeaturesTypes";
import { useSelector, AppDispatch } from "../../../store";
import { saveFastThinkingThemeAction } from "../../../slice/fastThinkingSlice";
import { selectFastThinkingActiveStep, selectFastThinkingSteps } from "../../../slice/stepperSlice";
import { BasicStepper } from "../../organisms/stepper";
import { Container } from "../../molecules/container";
import { generateNowDateString } from "../../../functions/generateString";
import { AppPageHeader } from "../../organisms/header";
import { SelectFastThikingTheme, FastThinkingTextArea } from "../../organisms/fastThinking";
import { FullScreenDialog } from "../../organisms/dialog";
import { CircularProgressbarCountDownTimer } from "../../organisms/timer";

// カラーの設定
const primaryColor = "#faa50a";

const FastThinking: React.FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const steps = useSelector(selectFastThinkingSteps);
  const activeStep = useSelector(selectFastThinkingActiveStep);

  const saveThemeAction = useCallback(
    (theme: InputThemeType) => {
      dispatch(saveFastThinkingThemeAction(theme));
    },
    [dispatch]
  );

  return (
    <>
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
              <SelectFastThikingTheme color={primaryColor} />
            ) : activeStep === 1 ? (
              <FastThinkingTextArea color={primaryColor} />
            ) : (
              activeStep === 2 && <div>aaaaaa</div>
            )}
          </StyledStep>
        </Container>
      </StyledContainer>
      <FullScreenDialog
        color={primaryColor}
        text="解決したい問題や悩みなどを設定しましょう"
        placeholder="例）勉強に集中できないのはなぜか？"
        saveThemeAction={saveThemeAction}
      />
    </>
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
