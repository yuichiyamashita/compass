import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  title?: string;
  // スタイルの型定義
  color?: string;
  fontSize: string | number;
  fontWeight?: number;
  letterSpacing?: string;
  borderHeight?: string;
  borderWidth?: string;
  borderColor?: string;
  margin?: string;
};

const BorderSubTitle: FC<Props> = (props) => {
  const { title, color, fontSize, fontWeight, letterSpacing, margin, borderColor, borderHeight, borderWidth } = props;

  return (
    <BorderTitle
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      borderColor={borderColor}
      borderHeight={borderHeight}
      borderWidth={borderWidth}
      margin={margin}
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
  font-weight: ${(props) => props.fontWeight};
  letter-spacing: ${(props) => props.letterSpacing};
  margin: ${(props) => props.margin};

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    height: ${(props) => props.borderHeight};
    width: ${(props) => props.borderWidth};
    background: ${(props) => props.borderColor};
    transform: translateY(-50%);
  }
  &::before {
    left: calc(0% - ${(props) => props.borderWidth} - 16px);
  }
  &::after {
    right: calc(0% - ${(props) => props.borderWidth} - 16px);
  }
`;
