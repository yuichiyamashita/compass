import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

type Props = {
  steps: string[];
  activeStep: number;
};

const BasicStepper: React.FC<Props> = React.memo((props) => {
  const { steps, activeStep } = props;

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
});

export default BasicStepper;
