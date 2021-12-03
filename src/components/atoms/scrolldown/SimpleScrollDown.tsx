import React from "react";
import styled, { keyframes } from "styled-components";

const SimpleScrollDown = () => {
  return <StyledScrollDown />;
};

export default SimpleScrollDown;

// animation
const arrowMoveAnimation = keyframes`
0% {
  bottom: 0%;
  opacity: 1;
}
50% {
  bottom: 2%;
}
100% {
  bottom: 0%;
  opacity: 1;
}
`;

// components
const StyledScrollDown = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  opacity: 0;
  animation: ${arrowMoveAnimation} 1.2s ease-in-out infinite 5.8s;

  &::before {
    content: "";
    position: absolute;
    right: -13px;
    width: 3px;
    height: 15px;
    background: #fff;
    transform: skewX(-60deg);
    animation: ${arrowMoveAnimation} 1.2s ease-in-out infinite 5.8s;
  }
  &::after {
    content: "";
    position: absolute;
    right: 13px;
    width: 3px;
    height: 15px;
    background: #fff;
    transform: skewX(60deg);
    animation: ${arrowMoveAnimation} 1.2s ease-in-out infinite 5.8s;
  }
`;
