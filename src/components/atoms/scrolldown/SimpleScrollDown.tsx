import React from "react";
import styled, { keyframes } from "styled-components";

const SimpleScrollDown = () => {
  return <StyledScrollDown>scroll</StyledScrollDown>;
};

export default SimpleScrollDown;

// animation
const arrowMoveAnimation = keyframes`
0% {
  bottom: 32px;
  opacity: 1;
}
50% {
  bottom: 40px;
}
100% {
  bottom: 32px;
  opacity: 1;
}
`;

// components
const StyledScrollDown = styled.div`
  position: absolute;
  font-size: 16px;
  right: 50%;
  transform: translateX(-50%);
  writing-mode: vertical-rl;
  color: #fff;
  letter-spacing: 4px;
  opacity: 0;
  animation: ${arrowMoveAnimation} 1.2s ease-in-out infinite 6.5s;

  @media screen and (max-width: 320px) {
    font-size: 12px;
    right: 16px;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: -10px;
    width: 1px;
    height: 20px;
    background: #fff;
    transform: skewX(-31deg);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -4px;
    width: 1px;
    height: 68px;
    background: #fff;

    @media screen and (max-width: 320px) {
      height: 56px;
    }
  }
`;
