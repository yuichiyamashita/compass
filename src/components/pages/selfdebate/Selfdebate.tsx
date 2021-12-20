import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { InputThemeType } from "../../../types/mainFeaturesTypes";
import { AppDispatch, useSelector } from "../../../store";
import { saveSelfDebateThemeAction } from "../../../slice/selfdebateSlice";
import {
  moveSelfDebateStepAction,
  selectSelfDebateSteps,
  selectSelfDebateActiveStep,
} from "../../../slice/stepperSlice";
import { BasicStepper } from "../../organisms/stepper";
import { Container } from "../../molecules/container";
import { generateNowDateString } from "../../../functions/generateString";
import { SelectSelfDebateTheme, PositiveOpinion, NegativeOpinion } from "../../organisms/selfdebate";
import { AppPageHeader } from "../../organisms/header";
import { FullScreenDialog } from "../../organisms/dialog";

// カラーの設定
const primaryColor = "#3f51b5";

const SelfDebate: React.FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const steps = useSelector(selectSelfDebateSteps);
  const activeStep = useSelector(selectSelfDebateActiveStep);

  const saveThemeAction = useCallback(
    (theme: InputThemeType) => {
      dispatch(saveSelfDebateThemeAction(theme));
    },
    [dispatch]
  );

  return (
    <>
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
              <SelectSelfDebateTheme color={primaryColor} />
            ) : activeStep === 1 ? (
              <PositiveOpinion color={primaryColor} />
            ) : activeStep === 2 ? (
              <NegativeOpinion color={primaryColor} />
            ) : (
              activeStep === 3 && <div>結論</div>
            )}
          </StyledStep>
        </Container>
      </StyledContainer>
      <FullScreenDialog
        color={primaryColor}
        text="賛成派と反対派に分けられるテーマを設定しましょう"
        placeholder="例）義理チョコにお返しは必要か？"
        saveThemeAction={saveThemeAction}
      />
    </>
  );
});

export default SelfDebate;

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
