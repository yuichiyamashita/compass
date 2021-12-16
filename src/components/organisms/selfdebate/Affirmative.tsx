import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { IconButton as MuiIconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { AppDispatch, useSelector } from "../../../store";
import { selfDebateSelector, countDownTimerSelector } from "../../../Selectors";
import { openDialogAction } from "../../../slice/selfdebateSlice";
import { PrimaryButton } from "../../atoms/button";
import { NoBorderTextField } from "../../atoms/textField";
import { startTimer } from "../timer/NotificationTimer";
import { TextAnimation } from "../../molecules/animation";
import { validateEmptyString } from "../../../functions/validations";
import { generateRandomString } from "../../../functions/generateString";

type InputOpinion = {
  id: string;
  editing: boolean;
  opinion: string;
};

const Affirmative: React.FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const selfDebate = useSelector(selfDebateSelector);
  const countDownTimer = useSelector(countDownTimerSelector);
  const theme = selfDebate.theme.theme;
  const display = countDownTimer.display;
  const isStart = countDownTimer.isStart;
  const secondsLeft = countDownTimer.secondsLeft;
  const [inputOpinion, setInputOpinion] = useState("");
  const [inputOpinions, setInputOpinions] = useState<InputOpinion[]>([]);

  // タイマースタート
  const handleTimerStart = useCallback(
    (time: number) => {
      dispatch(startTimer(time));
    },
    [dispatch]
  );

  // dialogの開閉
  const handleOpenDialog = useCallback(() => {
    dispatch(openDialogAction(true));
  }, [dispatch]);

  // 入力したテキストをstateに保存
  const handleChangeOpinion = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // タイマーが停止している場合は入力を禁止する
      if (!isStart) return;
      setInputOpinion(e.target.value);
    },
    [isStart]
  );

  // 入力したテキストを配列に追加
  const handleSubmitOpinion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmptyString(inputOpinion)) return;
    const id = generateRandomString();
    const newOpinion: InputOpinion = {
      id: id,
      editing: false,
      opinion: inputOpinion,
    };
    setInputOpinions([...inputOpinions, newOpinion]);
    setInputOpinion("");
  };

  // クリックしたテキストを削除
  const handleClickDelete = useCallback(
    (id: string) => {
      if (!isStart) return;
      const newOpinions = inputOpinions.filter((opinion) => opinion.id !== id);
      setInputOpinions(newOpinions);
    },
    [isStart, inputOpinions]
  );

  // タイマーが終了したらstoreにstateを保存する
  useEffect(() => {
    if (secondsLeft === 0) {
    }
  });

  // TODO 入力欄が画面外に行ってしまう現象を改善する
  return (
    <>
      {/* タイマーの表示・非表示で表示するコンポーネントを切り替える */}
      {display ? (
        <>
          <StyledTheme>{theme}</StyledTheme>
          <StyledFaction>肯定派</StyledFaction>
          <StyledTextArea>
            {/* 入力されたテキストのリスト */}
            <ul>
              {inputOpinions.map((opinion) => (
                // 編集中は入力フォームを表示
                <StyledOpinionListItem key={opinion.id}>
                  <p>・{opinion.opinion}</p>
                  {isStart && (
                    <MuiIconButton onClick={() => handleClickDelete(opinion.id)}>
                      <DeleteIcon />
                    </MuiIconButton>
                  )}
                </StyledOpinionListItem>
              ))}
            </ul>

            {/* 入力フォーム（タイマーが動いている場合に表示） */}
            <form onSubmit={handleSubmitOpinion}>
              {isStart && (
                <StyledTextFieldWithButton>
                  <NoBorderTextField
                    value={inputOpinion}
                    onChange={handleChangeOpinion}
                    label="ここに入力（Enterで決定）"
                    autoFocus
                  />
                </StyledTextFieldWithButton>
              )}
            </form>
          </StyledTextArea>
        </>
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
              onClick={() => handleTimerStart(180)}
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
  );
});

export default Affirmative;

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

// 入力画面に関するスタイル設定
const StyledTextArea = styled.div`
  font-family: "Klee One", cursive;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;
const StyledFaction = styled.span`
  background: #4285f4;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-family: "Klee One", cursive;
  letter-spacing: 1.5px;
  padding: 2px 8px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
const StyledOpinionListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 8px;

  p {
    word-break: break-all;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
const StyledTextFieldWithButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  margin-top: 16px;
`;
