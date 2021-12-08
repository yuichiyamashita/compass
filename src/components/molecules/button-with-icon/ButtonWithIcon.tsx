import React, { FC } from "react";
import styled from "styled-components";
import { Icon as MuiIcon } from "@mui/material";

type Props = {
  href?: string;
  icon: React.ElementType;
  background?: string;
  border?: string;
  boxShadowColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: 400 | 600;
  iconSize?: "small" | "medium" | "large";
};

type ButtonWrap = {
  background?: string;
  border?: string;
  color?: string;
};

const ButtonWithIcon: FC<Props> = React.memo((props) => {
  const { children, href, background, border, color, icon, iconSize } = props;

  return (
    <StyledWrap color={color} background={background} border={border}>
      <MuiIcon component={icon} fontSize={iconSize} />
      <div className="w-module-spacer--xs" />
      <a href={href}>{children}</a>
    </StyledWrap>
  );
});

export default ButtonWithIcon;

const StyledWrap = styled.div<ButtonWrap>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: 9px;
  color: ${(props) => props.color};
  cursor: pointer;
  padding: 8px 18px;
`;
