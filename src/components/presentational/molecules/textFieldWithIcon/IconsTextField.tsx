import React from "react";
import { TextField as MuiTextField, InputAdornment as MuiInputAdornment } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  autoFocus?: boolean;
};

const NoBorderTextInput: React.FC<Props> = ({ value, label, autoFocus, onChange }) => {
  return (
    <MuiTextField
      autoFocus={autoFocus}
      onChange={onChange}
      value={value}
      placeholder={label}
      fullWidth
      variant="standard"
      margin="dense"
      InputProps={{
        startAdornment: (
          <MuiInputAdornment position="start">
            <ArrowRightIcon fontSize="large" />
          </MuiInputAdornment>
        ),
      }}
    />
  );
};

export default NoBorderTextInput;
