import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";

import { AppDispatch, useSelector } from "../../../store";
import {
  invisibleCircularCountDownTimerAction,
  selectIsDisplayedCircularTimer,
  selectIsStartingCircularTimer,
} from "../../../slice/countDownTimerSlice";
import { PrimaryButton } from "../../atoms/button";
import { SelfdebatePreparingDisplay, SelfdebateTextArea } from ".";
import { moveSelfDebateStepAction } from "../../../slice/stepperSlice";

type StyleProps = {
  color: string;
};
type Props = StyleProps;

const Disagree: React.FC<Props> = React.memo((props) => {
  const { color } = props;
  const dispatch: AppDispatch = useDispatch();
  const isTimerDisplayed = useSelector(selectIsDisplayedCircularTimer);
  const isTimerStarting = useSelector(selectIsStartingCircularTimer);

  const handleClickNextStep = useCallback(() => {
    dispatch(invisibleCircularCountDownTimerAction()); // メインタイマーを非表示に
    dispatch(moveSelfDebateStepAction(3)); // 次のステップ（結論）へ切り替える
  }, [dispatch]);

  return (
    <>
      {/* タイマーの表示・非表示によってコンポーネントを切り替える */}
      {isTimerDisplayed ? (
        <SelfdebateTextArea color={color} factionText="否定派" faction="disagree" />
      ) : (
        <SelfdebatePreparingDisplay color={color} factionText="否定派" />
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
