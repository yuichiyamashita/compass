import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

type Props = {
  path?: string;
  text?: string;
  // スタイルの型定義
  background?: string;
  border?: string;
  radius?: string;
  boxShadowColor?: string;
  color: string;
  fontSize?: string;
  fontWeight?: 400 | 600;
  margin?: string;
  width?: string;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const PrimaryButton: React.FC<Props> = React.memo((props) => {
  const { path, text, background, border, radius, boxShadowColor, color, fontSize, fontWeight, margin, fullWidth } =
    props;
  const history = useHistory();

  const handleClick = () => {
    if (path) {
      history.push(path);
    }
  };

  return (
    <StyledPrimaryButton
      background={background}
      border={border}
      radius={radius}
      boxShadowColor={boxShadowColor}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      margin={margin}
      fullWidth={fullWidth}
      onClick={handleClick}
    >
      {text}
    </StyledPrimaryButton>
  );
});

export default PrimaryButton;

const StyledPrimaryButton = styled.button<Props>`
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.boxShadowColor && `1px 1px 2px ${props.boxShadowColor}`};
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  padding: 10px 18px;
  margin: ${(props) => props.margin};
  width: ${(props) => props.fullWidth && "100%"};
  text-align: center;
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;
