import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { IconButton as MuiIconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { AppDispatch, useSelector } from "../../../../store";
import { generateNowDateString, generateRandomString } from "../../../../modules/generateString";
import { validateEmptyString } from "../../../../modules/validations";
import CircularProgressbarCountDonwTimer from "../timer/CircularProgressbarCountDownTimer";
import { saveFastThinkingListItemAction, selectFastThinkingTheme } from "../../../../slice/fastThinkingSlice";
import { selectIsDisplayedCircularTimer, selectIsStartingCircularTimer } from "../../../../slice/countDownTimerSlice";
import { KleeOneSelectedTheme } from "../../../presentational/atoms";
import { IconsTextField } from "../../../presentational/molecules";

// Props
type StyleProps = {
  color: string;
};
type Props = StyleProps;

// ユーザー入力項目
type InputText = {
  id: string;
  text: string;
};

const FastThinkingTextArea: React.FC<Props> = React.memo((props) => {
  const { color } = props;
  const dispatch: AppDispatch = useDispatch();
  const themeState = useSelector(selectFastThinkingTheme);
  const theme = themeState.text;
  const isTimerDisplayed = useSelector(selectIsDisplayedCircularTimer);
  const isTimerStarting = useSelector(selectIsStartingCircularTimer);
  const [inputText, setInputText] = useState("");
  const [inputTexts, setInputTexts] = useState<InputText[]>([]);

  // ユーザーが入力したテキストをstate(文字列)に格納
  const handleChangeText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // タイマーが起動していない場合は入力を禁止する
      if (!isTimerStarting) return;
      setInputText(e.target.value);
    },
    [isTimerStarting]
  );

  // stateに格納されたテキストをstate(配列)に追加
  const handleSubmitText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // テキストが空の場合は追加を禁止する
    if (!validateEmptyString(inputText)) return;

    // 配列に追加するデータを作成
    const id = generateRandomString();
    const newText: InputText = {
      id: id,
      text: inputText,
    };
    // 作成したデータを配列に追加
    setInputTexts([...inputTexts, newText]);
    setInputText("");
  };

  // テキストをstate(配列)から削除
  const handleClickDelete = useCallback(
    (id: string) => {
      // タイマーが起動していない場合は削除を禁止する
      if (!isTimerStarting) return;

      // 引数のidを除いた配列を生成し、state(配列)を上書きする
      const newTexts = inputTexts.filter((text) => text.id !== id);
      setInputTexts(newTexts);
    },
    [isTimerStarting, inputTexts]
  );

  // タイマー終了時にFastThinkingのデータを生成し、store & Firestoreに保存
  useEffect(() => {
    // タイムアップ後&タイマー停止中の場合に保存を許可する
    if (isTimerDisplayed && !isTimerStarting) {
      // 保存するデータを作成
      const id = generateRandomString(); // 識別id
      const date = generateNowDateString(); // 作成時点の日付
      const newFastThinking = {
        id: id,
        created_at: date,
        theme: {
          isInputed: true,
          text: theme,
        },
        solutions: {
          isInputed: true,
          texts: inputTexts,
        },
      };
      // storeに保存
      dispatch(saveFastThinkingListItemAction(newFastThinking));
      // Firestoreに保存
      // TODO:firestoreに保存する処理を追加
    }
  }, [dispatch, inputTexts, isTimerDisplayed, isTimerStarting, theme]);

  return (
    <>
      <CircularProgressbarCountDonwTimer color={color} />
      <KleeOneSelectedTheme theme={theme} />
      <StyledTextArea>
        <ul>
          {inputTexts.map((text) => (
            <StyledListItem key={text.id}>
              <p>・{text.text}</p>
              {isTimerStarting && (
                <MuiIconButton onClick={() => handleClickDelete(text.id)}>
                  <DeleteIcon />
                </MuiIconButton>
              )}
            </StyledListItem>
          ))}
        </ul>
        {isTimerStarting && (
          <form onSubmit={handleSubmitText}>
            <StyledTextFieldWithButton>
              <IconsTextField
                value={inputText}
                onChange={handleChangeText}
                label="ここに入力（Enterで決定）"
                autoFocus
              />
            </StyledTextFieldWithButton>
          </form>
        )}
      </StyledTextArea>
    </>
  );
});

export default FastThinkingTextArea;

const StyledTextArea = styled.div`
  font-family: "Klee One", cursive;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;

const StyledListItem = styled.li`
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
