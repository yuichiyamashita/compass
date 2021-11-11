import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  href?: string;
  text?: string;
  // スタイルの型定義
  background?: string;
  border?: string;
  boxShadowColor?: string;
  color: string;
  fontSize?: string;
  fontWeight?: 400 | 600;
  margin?: string;
  width?: string;
  fullWidth?: boolean;
};

const PrimaryButton: FC<Props> = (props) => {
  const { href, text, background, border, boxShadowColor, color, fontSize, fontWeight, margin, fullWidth } = props;

  return (
    <StyledPrimaryButton
      background={background}
      border={border}
      boxShadowColor={boxShadowColor}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      margin={margin}
      fullWidth={fullWidth}
    >
      <a href={href}>{text}</a>
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;

const StyledPrimaryButton = styled.button<Props>`
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: 9px;
  box-shadow: ${(props) => props.boxShadowColor && `1px 1px 2px ${props.boxShadowColor}`};
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  padding: 8px 18px;
  margin: ${(props) => props.margin};
  width: ${(props) => props.fullWidth && "100%"};
  text-align: center;
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;
