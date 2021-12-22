import React from "react";
import styled from "styled-components";

import { useSelector, AppDispatch } from "../../../../store";
import { countDownTimerSelector } from "../../../../Selectors";
import {
  startPreparingCountDownTimerAction,
  stopPreparingCountDownTimerAction,
  decrementPreparingCountDownTimerAction,
  invisiblePreparingCountDownTimerAction,
} from "../../../../slice/countDownTimerSlice";

// 他コンポーネントからの呼び出し用の関数を定義
export const startPreparingCountDownTimer = (seconds: number) => {
  return (dispatch: AppDispatch) => {
    // 初期値を作成
    const settings = {
      isDisplayed: true,
      isStarting: true,
      seconds: seconds,
      secondsLeft: seconds,
    };
    let secondsLeft = seconds;
    let oneSecond = 1; // setIntervalで1秒だけ間隔を空けるための変数

    // 初期値をstoreにセット
    dispatch(startPreparingCountDownTimerAction(settings));
    dispatch(decrementPreparingCountDownTimerAction(secondsLeft));

    // カウントダウン処理
    const interval = setInterval(() => {
      secondsLeft--;
      dispatch(decrementPreparingCountDownTimerAction(secondsLeft));

      // 終了処理
      if (secondsLeft === 0) {
        clearInterval(interval);
        dispatch(stopPreparingCountDownTimerAction());

        // 「0 → スタート！」への表示の切り替えに1秒開ける処理
        const one = setInterval(() => {
          oneSecond--;
          dispatch(invisiblePreparingCountDownTimerAction());
          if (oneSecond === 0) {
            clearInterval(one);
          }
        }, 1000);
      }
    }, 1000);
  };
};

const PreparingTimer: React.FC = React.memo(() => {
  const state = useSelector(countDownTimerSelector);
  const isDisplayed = state.preparingCountDownTimer.isDisplayed;
  const secondsLeft = state.preparingCountDownTimer.secondsLeft;

  return <StyledPreparingTimer>{secondsLeft === 0 && isDisplayed ? "スタート！" : secondsLeft}</StyledPreparingTimer>;
});

export default PreparingTimer;

const StyledPreparingTimer = styled.div`
  padding: 32px 0;
  text-align: center;
  font-size: 32px;
  color: #fbc562;
  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
`;
