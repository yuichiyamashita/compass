import React from "react";
import styled from "styled-components";
import { Icon as MuiIcon } from "@mui/material";
import { BasicTypography } from "../../atoms";
import { BasicTypographyType } from "../../types/typography";

type StyleProps = {
  iconSize?: string;
  iconColor?: string;
  spacing?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  justify?: "flex-start" | "center" | "flex-end";
  alignItems?: "center" | "start" | "end" | "flex-start" | "flex-end";
  margin?: string;
  padding?: string;
};
type Props = BasicTypographyType & StyleProps & { text: string; icon: React.ElementType };

const BasicTypographyWithIcon: React.FC<Props> = React.memo((props) => {
  const {
    text,
    iconSize,
    iconColor,
    spacing,
    icon,
    justify,
    alignItems,
    margin,
    variant,
    component,
    align,
    color,
    fontFamily,
    fontWeight,
    padding,
    letterSpacing,
  } = props;
  return (
    <StyledFlexBox margin={margin} padding={padding} justify={justify} alignItems={alignItems}>
      <MuiIcon component={icon} sx={{ fontSize: iconSize, color: iconColor }} />
      <div className={`w-module-spacer--${spacing}`} />
      <BasicTypography
        component={component}
        variant={variant}
        color={color}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        align={align}
        letterSpacing={letterSpacing}
      >
        {text}
      </BasicTypography>
    </StyledFlexBox>
  );
});

export default BasicTypographyWithIcon;

const StyledFlexBox = styled.div<StyleProps>`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justify};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;
