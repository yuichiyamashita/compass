import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type StyleProps = {
  align?: string;
  background?: string;
  border?: string;
  radius?: string;
  boxShadowColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: 400 | 600;
  margin?: string;
  padding?: string;
  width?: string;
  fullWidth?: boolean;
};

type Props = StyleProps & { text: string; path: string };

const HistoryBackLink: React.FC<Props> = React.memo((props) => {
  const {
    align,
    path,
    text,
    background,
    border,
    radius,
    boxShadowColor,
    color,
    fontSize,
    fontWeight,
    margin,
    padding,
    fullWidth,
  } = props;

  return (
    <Link to={path}>
      <StyledPrimaryButton
        align={align}
        background={background}
        border={border}
        radius={radius}
        boxShadowColor={boxShadowColor}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        margin={margin}
        padding={padding}
        fullWidth={fullWidth}
      >
        {text}
      </StyledPrimaryButton>
    </Link>
  );
});

export default HistoryBackLink;

const StyledPrimaryButton = styled.div<StyleProps>`
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.boxShadowColor && `1px 1px 2px ${props.boxShadowColor}`};
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) => props.fullWidth && "100%"};
  text-align: ${(props) => props.align};
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;
