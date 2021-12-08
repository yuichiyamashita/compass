import React from "react";
import { Icon as MuiIcon } from "@mui/material";

import { H1Title } from "../../atoms/typography";
import { Flexbox } from "../layout";

type Props = {
  text: string;
  color?: string;
  fontSize?: string;
  icon: React.ElementType;
  iconSize?: string;
  iconColor?: "inherit" | "disabled" | "action" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  spacing?: string;
};

const H1TitleWithIcon: React.FC<Props> = React.memo((props) => {
  const { text, color, fontSize, icon, iconSize, iconColor, spacing } = props;

  return (
    <Flexbox justify="center">
      <MuiIcon component={icon} color={iconColor} sx={{ fontSize: iconSize }} />
      <div className="w-module-spacer--xs" />
      <H1Title color={color} fontSize={fontSize} spacing={spacing}>
        {text}
      </H1Title>
    </Flexbox>
  );
});

export default H1TitleWithIcon;
