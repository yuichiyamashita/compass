import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { IconButton as MuiIconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";

import { useSelector, AppDispatch } from "../../../store";
import { NoBorderTextField } from "../../atoms/textField";
import { validateEmptyString } from "../../../functions/validations";
import { generateRandomString } from "../../../functions/generateString";
import { CircularProgressbarCountDownTimer } from "../timer";
import { saveOpinionsAction, selectSelfDebateTheme } from "../../../slice/selfdebateSlice";
import { selectIsDisplayedCircularTimer, selectIsStartingCircularTimer } from "../../../slice/countDownTimerSlice";

type InputOpinion = {
  id: string;
  opinion: string;
};

type StyledProps = {
  color: string;
};

type Props = StyledProps & { faction?: string; factionText?: string };

const TextArea: React.FC<Props> = React.memo((props) => {
  const { faction, factionText, color } = props;
  const dispatch: AppDispatch = useDispatch();
  const themeState = useSelector(selectSelfDebateTheme);
  const theme = themeState.text;
  const isTimerDisplayed = useSelector(selectIsDisplayedCircularTimer);
  const isTimerStarting = useSelector(selectIsStartingCircularTimer);
  const [inputOpinion, setInputOpinion] = useState("");
  const [inputOpinions, setInputOpinions] = useState<InputOpinion[]>([]);

  // 入力されたテキストをstateに格納
  const handleChangeOpinion = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // タイマーが停止している場合は入力を禁止する
      if (!isTimerStarting) return;
      setInputOpinion(e.target.value);
    },
    [isTimerStarting]
  );

  // 入力されたテキストを配列に格納
  const handleSubmitOpinion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmptyString(inputOpinion)) return;
    const id = generateRandomString();
    const newOpinion: InputOpinion = {
      id: id,
      opinion: inputOpinion,
    };
    setInputOpinions([...inputOpinions, newOpinion]);
    setInputOpinion("");
  };

  // 配列からテキストを削除
  const handleClickDelete = useCallback(
    (id: string) => {
      if (!isTimerStarting) return;
      const newOpinions = inputOpinions.filter((opinion) => opinion.id !== id);
      setInputOpinions(newOpinions);
    },
    [isTimerStarting, inputOpinions]
  );

  // タイマー終了時に入力データをstoreに保存
  useEffect(() => {
    if (isTimerDisplayed && !isTimerStarting) {
      const id = generateRandomString();
      const newAgreeOpinions = {
        faction: faction,
        id: id,
        opinions: inputOpinions,
        isInputed: true,
      };

      dispatch(saveOpinionsAction(newAgreeOpinions));
    }
  }, [dispatch, inputOpinions, faction, isTimerDisplayed, isTimerStarting]);

  return (
    <>
      <CircularProgressbarCountDownTimer color={color} />
      <StyledTheme>{theme}</StyledTheme>
      {factionText && <StyledFaction color={color}>{factionText}</StyledFaction>}
      <StyledTextArea>
        {/* 入力されたテキストのリスト */}
        <ul>
          {inputOpinions.map((opinion) => (
            // 編集中は入力フォームを表示
            <StyledOpinionListItem key={opinion.id}>
              <p>・{opinion.opinion}</p>
              {isTimerStarting && (
                <MuiIconButton onClick={() => handleClickDelete(opinion.id)}>
                  <DeleteIcon />
                </MuiIconButton>
              )}
            </StyledOpinionListItem>
          ))}
        </ul>

        {/* 入力フォーム（タイマーが動いている場合に表示） */}
        <form onSubmit={handleSubmitOpinion}>
          {isTimerStarting && (
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
  );
});

export default TextArea;

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

// 賛成意見の入力画面に関するスタイル設定
const StyledTextArea = styled.div`
  font-family: "Klee One", cursive;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;
const StyledFaction = styled.span<StyledProps>`
  background: ${(props) => props.color};
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
