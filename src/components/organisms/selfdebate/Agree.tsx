import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";

import { AppDispatch, useSelector } from "../../../store";
import { countDownTimerSelector } from "../../../Selectors";
import { handleClickNextStepAction } from "../../../slice/selfdebateSlice";
import { invisibleCircularCountDownTimerAction } from "../../../slice/countDownTimerSlice";
import { PrimaryButton } from "../../atoms/button";
import { SelfdebatePreparingDisplay, SelfdebateTextArea } from "../selfdebate";

const Agree: React.FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const countDownTimer = useSelector(countDownTimerSelector);
  const isDisplayCircularCountDownTimer = countDownTimer.circularContDownTimer.isDisplay;
  const isStartCircularCountDownTimer = countDownTimer.circularContDownTimer.isStart;

  const handleClickNextStep = useCallback(() => {
    dispatch(invisibleCircularCountDownTimerAction()); // メインタイマーを非表示
    dispatch(handleClickNextStepAction(2)); // 次のステップ（否定派）へ切り替える
  }, [dispatch]);

  return (
    <>
      {/* タイマーの表示・非表示によってコンポーネントを切り替える */}
      {isDisplayCircularCountDownTimer ? (
        <SelfdebateTextArea color="#64b5f6" factionText="肯定派" faction="agree" />
      ) : (
        <SelfdebatePreparingDisplay color="#64b5f6" factionText="肯定派" />
      )}
      {isDisplayCircularCountDownTimer && !isStartCircularCountDownTimer && (
        <StyledButton>
          <PrimaryButton
            color="#fff"
            background="#e57373"
            radius="4px"
            text="続いて否定派へ →"
            onClick={handleClickNextStep}
          />
        </StyledButton>
      )}
    </>
  );
});

export default Agree;

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
