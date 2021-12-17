import React from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";

import { AppDispatch, useSelector } from "../../../store";
import { countDownTimerSelector } from "../../../Selectors";
import { handleClickNextStepAction } from "../../../slice/selfdebateSlice";
import { PrimaryButton } from "../../atoms/button";
import { TextArea, PreparingDisplay } from "../selfdebate";

const Agree: React.FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const countDownTimer = useSelector(countDownTimerSelector);
  const isDisplayCircularCountDownTimer = countDownTimer.circularContDownTimer.isDisplay;
  const isStartCircularCountDownTimer = countDownTimer.circularContDownTimer.isStart;

  return (
    <>
      {/* タイマーの表示・非表示によってコンポーネントを切り替える */}
      {isDisplayCircularCountDownTimer ? <TextArea /> : <PreparingDisplay />}
      {isDisplayCircularCountDownTimer && !isStartCircularCountDownTimer && (
        <StyledButton>
          <PrimaryButton
            color="#fff"
            background="#ff4b5e"
            radius="4px"
            text="続いて否定派へ →"
            onClick={() => dispatch(handleClickNextStepAction(2))}
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
  font-size: 12px;
  text-align: right;
  margin-top: 32px;
  animation: ${FadeInAnimation} 2s ease-in-out forwards;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding-right: 16px;
  }
`;
