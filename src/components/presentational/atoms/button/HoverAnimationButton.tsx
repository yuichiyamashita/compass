import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  href: string;
  text?: string;
  // styleの型定義
  background?: string;
  border?: string;
  color: string;
  fontSize?: string;
  fontWeight?: number;
};

const HoverAnimationButton: FC<Props> = React.memo((props) => {
  const { href, text, background, border, color, fontSize, fontWeight } = props;

  return (
    <StyledButton
      background={background}
      border={border}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      href={href}
    >
      {text}
    </StyledButton>
  );
});

export default HoverAnimationButton;

// アニメーションの設定
const rotationBefore = keyframes`
    0% {
      left: -30px;
    }
    50% {
      left: -25px;
    }
    100% {
      left: -30px;
    }
    `;
const rotationAfter = keyframes`
    0% {
      right: -30px;
    }
    50% {
      right: -25px;
    }
    100% {
      right: -30px;
    }`;

// コンポーネントを定義
const StyledButton = styled.a<Props>`
  position: relative;
  padding: 8px 18px;
  background: ${(props) => props.background};
  // border: ${(props) => props.border};
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  fontweight: ${(props) => props.fontWeight};
  transition: all 0.3s;
  &:hover {
    opacity: 0.9;
    border-radius: 12px;

    &::before,
    &::after {
      transform: translate(0, -50%) rotate(-135deg);
    }
    &::before {
      left: -34px;
      animation: ${rotationBefore} 0.6s linear infinite;
    }
    &::after {
      right: -34px;
      animation: ${rotationAfter} 0.6s linear infinite;
    }
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    transition: 0.5s;
    transform: translate(0, -50%) rotate(45deg);
  }
  &::before {
    border-bottom: ${(props) => props.border};
    border-left: ${(props) => props.border};
    top: 50%;
    left: -8px;
  }
  &::after {
    border-top: ${(props) => props.border};
    border-right: ${(props) => props.border};
    top: 50%;
    right: -8px;
  }
`;
