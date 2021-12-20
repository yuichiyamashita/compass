import React from "react";
import styled, { keyframes } from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useSelector, AppDispatch } from "../../../store";
import {
  startCircularCountDownTimerAction,
  stopCircularCountDownTimerAction,
  decrementCircularCountDownTimerAction,
  selectSecondsCircularTimer,
  selectSecondsLeftCircularTimer,
} from "../../../slice/countDownTimerSlice";
import { toast } from "react-toastify";

// 他コンポーネントからの呼び出し用の関数を定義
export const startCircularCountDownTimer = (seconds: number, color: string) => {
  return (dispatch: AppDispatch) => {
    // 初期値を作成 ======
    const settings = {
      isDisplayed: true,
      isStarting: true,
      seconds: seconds,
      secondsLeft: seconds,
    };
    let secondsLeft = seconds;

    // 初期値をstoreにセット
    dispatch(startCircularCountDownTimerAction(settings));
    dispatch(decrementCircularCountDownTimerAction(secondsLeft));

    // カウントダウン処理
    const interval = setInterval(() => {
      secondsLeft--;
      dispatch(decrementCircularCountDownTimerAction(secondsLeft));

      // 終了処理
      if (secondsLeft === 0) {
        clearInterval(interval);
        toast.success("終了！", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
          style: {
            background: color,
          },
        });
        dispatch(stopCircularCountDownTimerAction());
      }
    }, 1000);
  };
};

type Props = { color: string };

const CircularProgressbarCountDonwTimer: React.FC<Props> = React.memo((props) => {
  const { color } = props;
  const seconds = useSelector(selectSecondsCircularTimer);
  const secondsLeft = useSelector(selectSecondsLeftCircularTimer);

  const percentage = Math.round((secondsLeft / seconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let second = () => {
    if (secondsLeft % 60 < 10) {
      return "0" + (secondsLeft % 60);
    }
    return secondsLeft % 60;
  };

  return (
    <StyledCircularProgressbarCountDonwTimer>
      <CircularProgressbar
        value={percentage}
        text={minutes + " : " + second()}
        styles={buildStyles({
          trailColor: "#eee",
          textColor: color,
          pathColor: color,
          backgroundColor: "#fff",
        })}
        background
      />
    </StyledCircularProgressbarCountDonwTimer>
  );
});

export default CircularProgressbarCountDonwTimer;

const animation = keyframes`
0% {
    right: -200px;
    opacity: 0;
}
50% {
  right: 32px;
}
100% {
    right: 8px;
    opacity: 1;
}
`;

const StyledCircularProgressbarCountDonwTimer = styled.div`
  z-index: 999;
  position: fixed;
  top: 8px;
  width: 120px;
  border-radius: 100%;
  box-shadow: 0 0 8px #333;
  animation: ${animation} 0.5s ease-in-out forwards;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;
