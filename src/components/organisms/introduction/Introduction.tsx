import React, { FC } from "react";
import styled from "styled-components";

const Introduction: FC = () => {
  return (
    <StyledContainer>
      <StyledTextBox>
        <dt>COMPASSとは？</dt>
        <dd>＝ 論理的思考力を強化するためのアプリです。</dd>
      </StyledTextBox>
    </StyledContainer>
  );
};

export default Introduction;

const StyledContainer = styled.div`
  background: #8bd5da;
  color: #fff;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTextBox = styled.dl`
  padding: 64px 0;
  letter-spacing: 3px;

  dt {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 32px;
  }
  dd {
    font-size: 24px;
    font-weight: 600;
  }
`;
