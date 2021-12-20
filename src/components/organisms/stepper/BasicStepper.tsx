import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import { MuiTheme } from "../../../assets/material-ui";

type Props = {
  steps: string[];
  activeStep: number;
};

const CustomStep = styled(Step)({
  paddingRight: "4px",
  paddingLeft: "4px",
  [MuiTheme.breakpoints.up("sm")]: {
    paddingRight: "8px",
    paddingLeft: "8px",
  },
});

const BasicStepper: React.FC<Props> = React.memo((props) => {
  const { steps, activeStep } = props;
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <CustomStep key={index}>
              <StepLabel>{label}</StepLabel>
            </CustomStep>
          );
        })}
      </Stepper>
    </Box>
  );
});

export default BasicStepper;
