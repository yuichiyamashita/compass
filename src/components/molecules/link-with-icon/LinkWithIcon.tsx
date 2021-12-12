import React, { FC } from "react";
import styled from "styled-components";
import { Icon as MuiIcon } from "@mui/material";
import { Link } from "react-router-dom";

type DataProps = {
  path: string;
  text: string;
  icon: React.ElementType;
};
type StyleProps = {
  background?: string;
  border?: string;
  radius?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  iconSize?: "small" | "medium" | "large";
  padding?: string;
  spacing?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
};
type Props = DataProps & StyleProps;

const LinkWithIcon: FC<Props> = React.memo((props) => {
  const { path, text, icon, background, border, radius, color, fontSize, fontWeight, iconSize, padding, spacing } =
    props;

  return (
    <Link to={path}>
      <StyledButtonWithIconWrap
        background={background}
        border={border}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        padding={padding}
        radius={radius}
      >
        <MuiIcon component={icon} fontSize={iconSize} />
        {spacing && <div className={`w-module-spacer--${spacing}`} />}
        {text}
      </StyledButtonWithIconWrap>
    </Link>
  );
});

export default LinkWithIcon;

const StyledButtonWithIconWrap = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  padding: ${(props) => (props.padding ? props.padding : "10px 18px")};
`;
