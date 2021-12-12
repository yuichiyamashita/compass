import React from "react";
import styled from "styled-components";
import { Icon as MuiIcon } from "@mui/material";

type StyleProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  iconSize?: string;
  iconColor?: "inherit" | "disabled" | "action" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  spacing?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  justify?: "flex-start" | "center" | "flex-end";
  margin?: string;
};
type Props = StyleProps & { text: string; icon: React.ElementType };

const BasicTypographyWithIcon: React.FC<Props> = React.memo((props) => {
  const { text, color, fontSize, fontWeight, iconSize, iconColor, spacing, icon, justify, margin } = props;
  return (
    <StyledFlexBox margin={margin} justify={justify}>
      <MuiIcon component={icon} color={iconColor} sx={{ fontSize: iconSize }} />
      <div className={`w-module-spacer--${spacing}`} />
      <StyledTypography color={color} fontSize={fontSize} fontWeight={fontWeight}>
        {text}
      </StyledTypography>
    </StyledFlexBox>
  );
});

export default BasicTypographyWithIcon;

const StyledFlexBox = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
  margin: ${(props) => props.margin};
`;
const StyledTypography = styled.div<StyleProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  letter-spacing: 1.5px;
`;
