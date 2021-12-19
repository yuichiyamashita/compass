import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { InputThemeType } from "../../../types/mainFeaturesTypes";
import { AppDispatch, useSelector } from "../../../store";
import { openFullScreenDialogAction } from "../../../slice/dialogSlice";
import { PrimaryButton } from "../../atoms/button";
import { FullScreenDialog } from "../../organisms/dialog";
import { saveSelfDebateThemeAction, selectSelfDebateTheme } from "../../../slice/selfdebateSlice";
import { SelfdebatePreparingDisplay } from ".";

const SelectTheme: React.FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const theme = useSelector(selectSelfDebateTheme);
  const isThemeInputed = theme.isInputed;

  const handleClick = useCallback(() => {
    dispatch(openFullScreenDialogAction(true));
  }, [dispatch]);

  const saveThemeAction = useCallback(
    (theme: InputThemeType) => {
      dispatch(saveSelfDebateThemeAction(theme));
    },
    [dispatch]
  );
  return (
    <>
      <StyledThemeWrap>
        {!isThemeInputed ? (
          <>
            <StyledSelectTheme>最初に討論するテーマを選んでください。</StyledSelectTheme>
            <PrimaryButton text="テーマを選ぶ ↓" color="#fff" background="#33b6b1" radius="4px" onClick={handleClick} />
          </>
        ) : (
          <SelfdebatePreparingDisplay color="#4ab7ff" factionText="賛成派" />
        )}
      </StyledThemeWrap>
      <FullScreenDialog
        color="#33b6b1"
        text="賛成派と反対派に分けられるテーマを設定しましょう"
        placeholder="例）義理チョコにお返しは必要か？"
        saveThemeAction={saveThemeAction}
      />
    </>
  );
});

export default SelectTheme;

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
