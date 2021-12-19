import React from "react";
import styled from "styled-components";

const InputFastThinking: React.FC = React.memo(() => {
  return (
    <div>
      <StyledThemeWrap></StyledThemeWrap>
    </div>
  );
});

export default InputFastThinking;

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
