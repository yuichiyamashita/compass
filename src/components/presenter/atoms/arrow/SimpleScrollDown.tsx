import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  delay: string;
};

const SimpleScrollDown: FC<Props> = (props) => {
  const { delay } = props;
  return <StyledScrollDown delay={delay}>scroll</StyledScrollDown>;
};

export default SimpleScrollDown;

// animation
const arrowMoveAnimation = keyframes`
0% {
  bottom: 0;
  opacity: 1;
}
50% {
  bottom: 8px;
}
100% {
  bottom: 0;
  opacity: 1;
}
`;

// components
const StyledScrollDown = styled.div<Props>`
  position: absolute;
  font-size: 16px;
  right: 50%;
  transform: translateX(-50%);
  writing-mode: vertical-rl;
  color: #fff;
  letter-spacing: 4px;
  opacity: 0;
  animation: ${arrowMoveAnimation} 1.2s ease-in-out infinite ${(props) => props.delay};

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
