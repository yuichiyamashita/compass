import React, { FC } from "react";
import { Icon as MuiIcon } from "@mui/material";

import { H1Title } from "../../atoms/typography";
import { Flexbox } from "../layout";

type Props = {
  text: string;
  color?: string;
  icon: React.ElementType;
  iconSize?: "small" | "medium" | "large";
  iconColor?: "inherit" | "disabled" | "action" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
};

const H1TitleWithIcon: FC<Props> = (props) => {
  const { text, color, icon, iconSize, iconColor } = props;

  return (
    <Flexbox justify="center">
      <MuiIcon component={icon} fontSize={iconSize} iconColor={iconColor} />
      <div className="w-module-spacer--xs" />
      <H1Title color={color}>{text}</H1Title>
    </Flexbox>
  );
};

export default H1TitleWithIcon;
