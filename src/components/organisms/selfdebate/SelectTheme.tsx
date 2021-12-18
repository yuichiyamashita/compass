import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../store";
import { openDialogAction } from "../../../slice/selfdebateSlice";
import { PrimaryButton } from "../../atoms/button";

const SelectTheme: React.FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(openDialogAction(true));
  }, [dispatch]);

  return (
    <>
      <StyledThemeWrap>
        <StyledSelectTheme>最初に討論するテーマを選んでください。</StyledSelectTheme>
        <PrimaryButton text="テーマを選ぶ ↓" color="#fff" background="#33b6b1" radius="4px" onClick={handleClick} />
      </StyledThemeWrap>
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
