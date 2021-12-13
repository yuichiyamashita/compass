import React, { useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";

import { useSelector, AppDispatch } from "../../../store";
import { selfDebateSelector } from "../../../Selectors";
import { openDialogAction, handleNextAction, saveThemeAction } from "../../../slice/selfdebateSlice";
import { PrimaryButton } from "../../atoms/button";

const SelectTheme: React.FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector(selfDebateSelector);
  const isInputedTheme = state.theme.isInputed;
  const theme = state.theme.theme;

  const handleClick = useCallback(() => {
    dispatch(openDialogAction(true));
  }, [dispatch]);

  const handleChangeTheme = useCallback(() => {
    dispatch(openDialogAction(true));
    const newTheme = {
      theme: "",
      isInputed: false,
    };
    dispatch(saveThemeAction(newTheme));
  }, [dispatch]);

  const handleNext = useCallback(() => {
    dispatch(handleNextAction(1));
  }, [dispatch]);

  return (
    <>
      {isInputedTheme ? (
        <>
          <StyledThemeWrap>
            <StyledTheme>
              <span>テーマ:</span>
              <p>{theme}</p>
            </StyledTheme>
            <PrimaryButton
              text="テーマを変更する"
              color="#71a5f3"
              border="1px solid #71a5f3"
              radius="4px"
              onClick={handleChangeTheme}
            />
          </StyledThemeWrap>
          <PrimaryButton
            text="次は肯定意見を述べましょう →"
            color="#fff"
            background="#71a5f3"
            radius="4px"
            fullWidth
            onClick={handleNext}
          />
        </>
      ) : (
        <StyledThemeWrap>
          <StyledSelectTheme>最初に討論するテーマを選んでください。</StyledSelectTheme>
          <PrimaryButton text="テーマを選ぶ ↓" color="#fff" background="#71a5f3" radius="4px" onClick={handleClick} />
        </StyledThemeWrap>
      )}
    </>
  );
});

export default SelectTheme;

const scaleAnimation = keyframes`
0% {
  opacity: 0;
  transform: translateX(-100%);
},
100% {
}
`;

const StyledThemeWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 32px;
`;

const StyledTheme = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #555;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  p {
    animation: ${scaleAnimation} 1s ease-in-out forwards;
  }

  span {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 8px;
  }
`;

const StyledSelectTheme = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 32px;
`;
