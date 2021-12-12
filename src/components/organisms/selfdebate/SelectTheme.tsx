import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { useSelector, AppDispatch } from "../../../store";
import { selfDebateSelector } from "../../../Selectors";
import { openDialogAction, handleNextAction } from "../../../slice/selfdebateSlice";
import { PrimaryButton } from "../../atoms/button";

const SelectTheme: React.FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector(selfDebateSelector);
  const isInputedTheme = state.theme.isInputed;
  const theme = state.theme.theme;

  const handleClick = useCallback(() => {
    dispatch(openDialogAction(true));
  }, [dispatch]);

  const handleNext = useCallback(() => {
    dispatch(handleNextAction(1));
  }, [dispatch]);

  return (
    <>
      {isInputedTheme ? (
        <StyledThemeWrap>
          <span>テーマ：</span>
          <div className="h-module-spacer--xs" />
          <StyledTheme>{theme}</StyledTheme>
          <PrimaryButton
            text="テーマを変更する"
            color="#33b6b1"
            border="1px solid #33b6b1"
            radius="4px"
            onClick={handleClick}
          />
        </StyledThemeWrap>
      ) : (
        <StyledThemeWrap>
          <StyledSelectTheme>討論するテーマを選んでください。</StyledSelectTheme>
          <PrimaryButton
            text="テーマを選ぶ →"
            color="#33b6b1"
            border="1px solid #33b6b1"
            radius="4px"
            onClick={handleClick}
          />
        </StyledThemeWrap>
      )}
      <PrimaryButton text="開始 →" color="#fff" background="#33b6b1" radius="4px" fullWidth onClick={handleNext} />
    </>
  );
});

export default SelectTheme;

const StyledThemeWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 48px 0;
`;

const StyledTheme = styled.div`
  color: #555;
  font-size: 18px;
  letter-spacing: 1.5px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const StyledSelectTheme = styled.div`
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 16px;
`;
