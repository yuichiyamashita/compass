import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Grid as MuiGrid } from "@mui/material";

import { AppDispatch, useSelector } from "../../../store";
import { selfDebateSelector } from "../../../Selectors";
import { handleNextAction } from "../../../slice/selfdebateSlice";
import { startTimer } from "../../molecules/timer/NotificationTimer";
import { PrimaryButton } from "../../atoms/button";

const Affirmative: React.FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector(selfDebateSelector);
  const theme = state.theme.theme;

  return (
    <>
      <StyledTheme>
        <span>テーマ:</span>
        {theme}
      </StyledTheme>
      <PrimaryButton
        text="開始 →"
        background="#71a5f3"
        color="#fff"
        radius="4px"
        fullWidth
        onClick={() => dispatch(startTimer(120))}
      />
    </>
  );
});

export default Affirmative;

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

  span {
    font-size: 18px;
    font-weight: 400;
  }
`;
