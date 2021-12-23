import React from "react";
import styled from "styled-components";

import { BasicTypography } from "../../../presentational/atoms";

const TimeUpDialog: React.FC = React.memo(() => {
  return (
    <StyledTimeUpDialog>
      <StyledInnnerBox>
        <BasicTypography variant="h4" component="h1"></BasicTypography>
      </StyledInnnerBox>
    </StyledTimeUpDialog>
  );
});

export default TimeUpDialog;

const StyledTimeUpDialog = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
`;

const StyledInnnerBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 8px #333;
`;
