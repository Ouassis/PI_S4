import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = ['Form1', 'Form2', 'Form3','Form4'];

export default function HorizontalStepperWithError({actvStep,fldStep}) {
  const isStepFailed = (step) => {
    return step === fldStep ;
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={actvStep}>
        {steps.map((label, index) => {
          const labelProps = {};
          if (isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Alert message
              </Typography>
            );

            labelProps.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
