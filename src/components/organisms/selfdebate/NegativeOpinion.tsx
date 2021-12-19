import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";

import { AppDispatch, useSelector } from "../../../store";
import {
  invisibleCircularCountDownTimerAction,
  selectCircularCountDownTimer,
} from "../../../slice/countDownTimerSlice";
import { PrimaryButton } from "../../atoms/button";
import { SelfdebatePreparingDisplay, SelfdebateTextArea } from ".";

type Props = {
  handleClickMoveStep: (step: number) => void;
};

const Disagree: React.FC<Props> = React.memo((props) => {
  const { handleClickMoveStep } = props;
  const dispatch: AppDispatch = useDispatch();
  const circularContDownTimer = useSelector(selectCircularCountDownTimer);
  const isTimerDisplayed = circularContDownTimer.isDisplay;
  const isTimerStarting = circularContDownTimer.isStart;

  const handleClickNextStep = useCallback(() => {
    dispatch(invisibleCircularCountDownTimerAction()); // メインタイマーを非表示に
    handleClickMoveStep(3); // 次のステップ（結論）へ切り替える
  }, [dispatch, handleClickMoveStep]);

  return (
    <>
      {/* タイマーの表示・非表示によってコンポーネントを切り替える */}
      {isTimerDisplayed ? (
        <SelfdebateTextArea color="#e57373" factionText="否定派" faction="disagree" />
      ) : (
        <SelfdebatePreparingDisplay color="#e57373" factionText="否定派" />
      )}
      {isTimerDisplayed && !isTimerStarting && (
        <StyledButton>
          <PrimaryButton
            color="#fff"
            background="#33b6b1"
            radius="4px"
            text="続いて結論へ →"
            onClick={handleClickNextStep}
          />
        </StyledButton>
      )}
    </>
  );
});

export default Disagree;

const FadeInAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const StyledButton = styled.div`
  opacity: 0;
  font-size: 12px;
  text-align: right;
  margin-top: 32px;
  animation: ${FadeInAnimation} 1s ease-in-out 0.5s forwards;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding-right: ;
  }
`;
