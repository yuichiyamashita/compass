import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  title?: string;
  // スタイルの型定義
  color?: string;
  fontSize: string;
  letterSpacing?: string;
  borderHeight?: string;
  borderWidth?: string;
  margin?: string;
  align?: "center" | "left" | "right";
};

const BorderSubTitle: FC<Props> = (props) => {
  const { title, color, fontSize, letterSpacing, margin, borderHeight, borderWidth, align } = props;

  return (
    <BorderTitle
      color={color}
      fontSize={fontSize}
      letterSpacing={letterSpacing}
      borderHeight={borderHeight}
      borderWidth={borderWidth}
      margin={margin}
      align={align}
    >
      {title}
    </BorderTitle>
  );
};

export default BorderSubTitle;

const BorderTitle = styled.h2<Props>`
  position: relative;
  display: inline-block;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  letter-spacing: ${(props) => props.letterSpacing};
  margin: ${(props) => props.margin};
  text-align: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    height: ${(props) => props.borderHeight};
    width: ${(props) => props.borderWidth};
    background: ${(props) => props.color};
    transform: translateY(-50%);
  }
  &::before {
    left: calc(0% - ${(props) => props.borderWidth} - 16px);
  }
  &::after {
    right: calc(0% - ${(props) => props.borderWidth} - 16px);
  }
`;
