import React, { FC } from "react";
import styled from "styled-components";

const Introduction: FC = () => {
  return (
    <StyledContainer>
      <StyledTextBox>
        <dt>COMPASSとは？</dt>
        <dd>=「論理的思考力」を強化するためのアプリです。</dd>
      </StyledTextBox>
    </StyledContainer>
  );
};

export default Introduction;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #23133e;
  color: #fff;
  height: 58vh;
  overflow: hidden;
  padding-top: 8vw;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-top: 8vw solid #000;
    border-right: 100vw solid transparent;
  }
`;

const StyledTextBox = styled.dl`
  padding: 64px 16px;
  letter-spacing: 3px;
  font-weight: 600;

  dt {
    text-align: center;
    margin-bottom: 32px;

    @media screen and (min-width: 320px) {
      font-size: 32px;
    }
  }
  dd {
    @media screen and (min-width: 320px) {
      font-size: 20px;
    }
    @media screen and (min-width: 375px) {
      font-size: 22px;
    }
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;
