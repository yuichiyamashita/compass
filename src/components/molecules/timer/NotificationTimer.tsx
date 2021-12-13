import React from "react";
import styled, { keyframes } from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useSelector, AppDispatch } from "../../../store";
import { countDownTimerSelector } from "../../../Selectors";
import { setCountDownTimerAction, decrementCountAction } from "../../../slice/countDownTimerSlice";
import { toast } from "react-toastify";

// 別のコンポーネントで呼び出すタイマー発火の関数を定義
export const startTimer = (seconds: number) => {
  return (dispatch: AppDispatch) => {
    // 初期値を作成 ======
    const setTimerSettings = {
      display: true,
      seconds: seconds,
    };
    let secondsLeft = seconds;

    // 初期値をstoreにセット
    dispatch(setCountDownTimerAction(setTimerSettings));
    dispatch(decrementCountAction(secondsLeft));

    // カウントダウン処理
    const interval = setInterval(() => {
      secondsLeft--;
      dispatch(decrementCountAction(secondsLeft));
      if (secondsLeft === 0) {
        clearInterval(interval);

        // 終了の処理
        toast.success("終了です", {
          position: "top-center",
        });
      }
    }, 1000);
  };
};

const NotificationTimer: React.FC = React.memo(() => {
  const state = useSelector(countDownTimerSelector);
  const display = state.display;
  const seconds = state.seconds;
  const secondsLeft = state.secondsLeft;

  const percentage = Math.round((secondsLeft / seconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let second = () => {
    if (secondsLeft % 60 < 10) {
      return "0" + (secondsLeft % 60);
    }
    return secondsLeft % 60;
  };

  return (
    <>
      {display && (
        <StyledNotificationTimer>
          <CircularProgressbar
            value={percentage}
            text={minutes + " : " + second()}
            strokeWidth={1}
            styles={buildStyles({
              textColor: "#8bd5da",
              pathColor: "#8bd5da",
              trailColor: "#ececec",
            })}
          />
        </StyledNotificationTimer>
      )}
    </>
  );
});

export default NotificationTimer;

const animation = keyframes`
0% {
    right: -200px;
    opacity: 0;
}
100% {
    right: 16px;
    opacity: 1;
}
`;

const StyledNotificationTimer = styled.div`
  z-index: 999;
  position: absolute;
  top: 16px;
  width: 100px;
  background: #fff;
  border-radius: 100%;
  animation: ${animation} 0.5s ease-in-out forwards;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;
