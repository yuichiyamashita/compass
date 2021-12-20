import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../store";
import { openFullScreenDialogAction } from "../../../slice/dialogSlice";
import { PrimaryButton } from "../../atoms/button";

type StyleProps = {
  color: string;
};
type Props = StyleProps;

const SelectTheme: React.FC<Props> = React.memo((props) => {
  const { color } = props;
  const dispatch: AppDispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(openFullScreenDialogAction(true));
  }, [dispatch]);

  return (
    <StyledThemeWrap>
      <StyledSelectTheme>最初に討論するテーマを選んでください。</StyledSelectTheme>
      <PrimaryButton text="テーマを選ぶ ↓" color="#fff" background={color} radius="4px" onClick={handleClick} />
    </StyledThemeWrap>
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
