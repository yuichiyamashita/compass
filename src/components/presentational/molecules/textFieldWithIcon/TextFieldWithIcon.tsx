import React from "react";
import { TextField as MuiTextField } from "@mui/material";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  autoFocus?: boolean;
  type?: React.HTMLInputTypeAttribute;
  variant?: "standard" | "outlined" | "filled";
  fullWidth?: boolean;
  margin?: "dense" | "none" | "normal";
  autoComplete?: string;
  icon?: JSX.Element;
};

const TextFieldWithIcon: React.FC<Props> = React.memo(({ ...props }) => {
  const { value, onChange, label, autoFocus, type, variant, fullWidth, margin, autoComplete, icon } = props;
  return (
    <MuiTextField
      autoComplete={autoComplete}
      type={type}
      autoFocus={autoFocus}
      onChange={onChange}
      value={value}
      placeholder={label}
      fullWidth={fullWidth}
      variant={variant}
      margin={margin}
      InputProps={{
        startAdornment: icon,
      }}
    />
  );
});

export default TextFieldWithIcon;
