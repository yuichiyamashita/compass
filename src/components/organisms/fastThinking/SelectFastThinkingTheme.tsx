import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { AppDispatch, useSelector } from "../../../store";
import { selectFastThinkingTheme } from "../../../slice/fastThinkingSlice";
import { openFullScreenDialogAction } from "../../../slice/dialogSlice";
import { PrimaryButton } from "../../atoms/button";
import { FastThinkingPreparingDisplay } from ".";

type StyleProps = {
  color: string;
};

type Props = StyleProps;

const SelectFastThinkingTheme: React.FC<Props> = React.memo((props) => {
  const { color } = props;
  const dispatch: AppDispatch = useDispatch();
  const theme = useSelector(selectFastThinkingTheme);
  const isThemeInputed = theme.isInputed;

  const handleClick = useCallback(() => {
    dispatch(openFullScreenDialogAction(true));
  }, [dispatch]);

  return (
    <StyledThemeWrap>
      {!isThemeInputed ? (
        <>
          <StyledSelectTheme>最初にテーマを選んでください。</StyledSelectTheme>
          <PrimaryButton text="テーマを選ぶ ↓" color="#fff" background={color} radius="4px" onClick={handleClick} />
        </>
      ) : (
        <FastThinkingPreparingDisplay color={color} />
      )}
    </StyledThemeWrap>
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
