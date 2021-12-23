import React from "react";
import Typography from "@mui/material/Typography";
import { BasicTypographyType } from "../../types/typography";

type TypoGraphyProps = BasicTypographyType;

const BasicTypography: React.FC<TypoGraphyProps> = React.memo(({ children, ...props }) => {
  const { align, component, variant, fontFamily, fontWeight, color, margin, padding } = props;
  return (
    <Typography
      align={align}
      color={color}
      component={component}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      variant={variant}
      margin={margin}
      padding={padding}
    >
      {children}
    </Typography>
  );
});

export default BasicTypography;
