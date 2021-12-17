import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { AppDispatch, useSelector } from "../../../store";
import { selfDebateSelector, countDownTimerSelector } from "../../../Selectors";
import { openDialogAction } from "../../../slice/selfdebateSlice";
import { PrimaryButton } from "../../atoms/button";
import { TextAnimation } from "../../molecules/animation";
import { startCircularCountDownTimer } from "../timer/CircularProgressbarCountDownTimer";
import { startPreparingCountDownTimer } from "../timer/PreparingCountDownTimer";
import { PrepaeringCountDownTimer } from "../timer";
import { TextArea } from "../selfdebate";

const PreparingDisplay: React.FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const selfDebate = useSelector(selfDebateSelector);
  const countDownTimer = useSelector(countDownTimerSelector);
  const theme = selfDebate.theme.theme;
  const isDisplayCircularCountDownTimer = countDownTimer.circularContDownTimer.isDisplay;
  const isDisplayPreparingCountDownTimer = countDownTimer.preparingCountDownTimer.isDisplay;

  // タイマーの発火処理 ===============================
  const handleClickStartTimer = useCallback(
    (seconds: number) => {
      // 1つ目のタイマー発火
      dispatch(startPreparingCountDownTimer(3));

      let fourSeconds = 4; // 1つ目のタイマーが表示されてから4秒後に、2つ目のタイマーを表示するための変数
      const interval = setInterval(() => {
        fourSeconds--;
        if (fourSeconds === 0) {
          // 2つ目のタイマー発火
          dispatch(startCircularCountDownTimer(seconds));
          clearInterval(interval);
        }
      }, 1000);
    },
    [dispatch]
  );

  // ダイアログ =======================================
  // dialogの開閉
  const handleOpenDialog = useCallback(() => {
    dispatch(openDialogAction(true));
  }, [dispatch]);

  return (
    <>
      {/* タイマーの表示・非表示によってコンポーネントを切り替える */}
      {isDisplayCircularCountDownTimer ? (
        <TextArea />
      ) : (
        <>
          {/* 1つ目のタイマーの表示・非表示によってコンポーネントを切り替える */}
          {isDisplayPreparingCountDownTimer ? (
            <PrepaeringCountDownTimer />
          ) : (
            <>
              <StyledThemeWrap>
                <span>テーマ:</span>
                <StyledTheme>
                  <section id="theme">
                    <TextAnimation section="theme" duration={0.02} delay={0.4}>
                      {theme}
                    </TextAnimation>
                  </section>
                </StyledTheme>
              </StyledThemeWrap>
              <StyledText>
                制限時間は3分間です。
                <br />「 <span>肯定派</span> 」の意見を述べてください。
              </StyledText>
              <StyledButtonWrap>
                <PrimaryButton
                  text="スタート →"
                  background="#71a5f3"
                  color="#fff"
                  radius="4px"
                  fullWidth
                  onClick={() => handleClickStartTimer(10)}
                  autoFocus
                />
                <div className="h-module-spacer--sm" />
                <PrimaryButton
                  text="テーマを変更する"
                  color="#71a5f3"
                  border="1px solid #71a5f3"
                  radius="4px"
                  fullWidth
                  onClick={handleOpenDialog}
                />
              </StyledButtonWrap>
            </>
          )}
        </>
      )}
    </>
  );
});

export default PreparingDisplay;

const StyledThemeWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 64px;
  margin-bottom: 96px;

  span {
    font-weight: 400;
    margin-bottom: 4px;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

const StyledTheme = styled.h2`
  color: #555;
  font-size: 20px;
  font-weight: 600;
  font-family: "Klee One", cursive;
  letter-spacing: 1.5px;
  text-align: left;
  margin-bottom: 16px;
  word-break: break-all;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

const StyledText = styled.div`
  text-align: center;
  margin-bottom: 16px;

  span {
    font-weight: 600;
    color: #4285f4;
  }

  @media screen and (min-width: 768px) {
    br {
      display: none;
    }
  }
`;

const StyledButtonWrap = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
