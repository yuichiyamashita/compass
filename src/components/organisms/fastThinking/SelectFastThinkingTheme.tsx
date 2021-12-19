import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { InputThemeType } from "../../../types/mainFeaturesTypes";
import { useSelector, AppDispatch } from "../../../store";
import { saveFastThinkingThemeAction, selectFastThinkingTheme } from "../../../slice/fastThinkingSlice";
import { openFullScreenDialogAction } from "../../../slice/dialogSlice";
import { PrimaryButton } from "../../atoms/button";
import { FastThinkingPreparingDisplay } from ".";
import { FullScreenDialog } from "../../organisms/dialog";

const SelectFastThinkingTheme: React.FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const theme = useSelector(selectFastThinkingTheme);
  const isThemeInputed = theme.isInputed;

  const handleClick = useCallback(() => {
    dispatch(openFullScreenDialogAction(true));
  }, [dispatch]);

  const saveThemeAction = useCallback(
    (theme: InputThemeType) => {
      dispatch(saveFastThinkingThemeAction(theme));
    },
    [dispatch]
  );

  return (
    <>
      <StyledThemeWrap>
        {!isThemeInputed ? (
          <>
            <StyledSelectTheme>最初にテーマを選んでください。</StyledSelectTheme>
            <PrimaryButton text="テーマを選ぶ ↓" color="#fff" background="#faa50a" radius="4px" onClick={handleClick} />
          </>
        ) : (
          <FastThinkingPreparingDisplay color="#faa50a" />
        )}
      </StyledThemeWrap>
      <FullScreenDialog
        color="#faa50a"
        text="解決したい問題や悩みなどを設定しましょう"
        placeholder="例）勉強に集中できないのはなぜか？"
        saveThemeAction={saveThemeAction}
      />
    </>
  );
});

export default SelectFastThinkingTheme;

const StyledThemeWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
  margin-bottom: 48px;
`;

const StyledSelectTheme = styled.div`
  font-weight: 600;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
