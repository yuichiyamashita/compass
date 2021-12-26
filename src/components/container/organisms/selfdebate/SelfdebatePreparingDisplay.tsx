import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { AppDispatch, useSelector } from "../../../../store";
import { openFullScreenDialogAction } from "../../../../slice/dialogSlice";
import { PrepaeringCountDownTimer } from "../../organisms";
import { TextAnimation } from "../../../presentational/molecules";
import { PrimaryButton } from "../../../presentational/atoms";
import { startCircularCountDownTimer } from "../timer/CircularProgressbarCountDownTimer";
import { startPreparingCountDownTimer } from "../timer/PreparingCountDownTimer";
import { selectSelfDebatePositiveOpinions, selectSelfDebateTheme } from "../../../../slice/selfdebateSlice";
import { selectIsDisplayedPreparingTimer } from "../../../../slice/countDownTimerSlice";

type StyledProps = {
  color: string;
};

type Props = StyledProps & { factionText: string };

const PreparingDisplay: React.FC<Props> = React.memo((props) => {
  const { factionText, color } = props;
  const dispatch: AppDispatch = useDispatch();
  const isTimerDisplayed = useSelector(selectIsDisplayedPreparingTimer);
  const themeState = useSelector(selectSelfDebateTheme);
  const theme = themeState.text;
  const positiveOpinions = useSelector(selectSelfDebatePositiveOpinions);
  const isPositiveOpinionInputed = positiveOpinions.isInputed;

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
          dispatch(startCircularCountDownTimer(seconds, color));
          clearInterval(interval);
        }
      }, 1000);
    },
    [dispatch, color]
  );

  // ダイアログ =======================================
  // dialogの開閉
  const handleOpenDialog = useCallback(() => {
    dispatch(openFullScreenDialogAction(true));
  }, [dispatch]);

  return (
    <>
      {isTimerDisplayed ? (
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
          <StyledText color={color}>
            制限時間は3分間です。
            <br />「 <span>{factionText}</span> 」の意見を述べてください。
          </StyledText>
          <StyledButtonWrap>
            <PrimaryButton
              text="スタート →"
              background={color}
              color="#fff"
              radius="4px"
              fullWidth
              onClick={() => handleClickStartTimer(180)} // TODO：次のステップに移動する処理を追加
            />
            {/* 賛成派意見が入力済みの場合はテーマ変更ボタンを非表示にする */}
            {!isPositiveOpinionInputed && (
              <>
                <div className="h-module-spacer--sm" />
                <PrimaryButton
                  text="テーマを変更する"
                  color={color}
                  border={`1px solid ${color}`}
                  radius="4px"
                  fullWidth
                  onClick={handleOpenDialog}
                />
              </>
            )}
          </StyledButtonWrap>
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

const StyledText = styled.div<StyledProps>`
  text-align: center;
  margin-bottom: 16px;

  span {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.color};
  }

  @media screen and (min-width: 768px) {
    br {
      display: none;
    }

    span {
      font-size: 24px;
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
