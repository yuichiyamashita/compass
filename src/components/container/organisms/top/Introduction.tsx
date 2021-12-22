import React from "react";
import styled from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Introduction: React.FC = () => {
  return (
    <StyledContainer>
      <StyledTextBox>
        <dt>COMPASSとは？</dt>
        <StyledEqual>
          <ArrowDownwardIcon sx={{ fontSize: "32px", transform: "rotateZ(-90deg)" }} />
        </StyledEqual>
        <dd>
          <span>「論理的思考力」</span>
          <br />
          を強化するためのトレーニングアプリです。
        </dd>
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
  background: #8bd5da;
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
    text-align: center;
    @media screen and (min-width: 320px) {
      font-size: 20px;
    }
    @media screen and (min-width: 375px) {
      font-size: 22px;
    }
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }

    span {
      display: inline-block;
      font-size: 32px;
      margin-bottom: 8px;
    }
  }
`;

const StyledEqual = styled.dd`
  transform: rotateZ(90deg);
  margin-bottom: 32px;
`;
