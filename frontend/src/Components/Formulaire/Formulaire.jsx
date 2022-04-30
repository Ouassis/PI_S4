import React from 'react'
import { useState, useContext } from "react";
import './Formulaire.css'
import CircularStatic from './ProgressBar'
import { MDBContainer, MDBInputGroup } from "mdbreact";
/* import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
 *//* import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit'; */
import HorizontalStepperWithError from './HorizontalStepperWithError'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Stack from '@mui/material/Stack';

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box, Checkbox } from '@mui/material';

import { FormsContext } from './Helpers/Context'
import Form0 from './Form0';
import Form1 from './Form1';

function Formulaire() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [inputs, setInputs] = useState({});
  const [questioncounter, setQuestioncounter] = useState(0)





  const [isChecked, setIsChecked] = useState([])


  const onCheckboxChange = ({ target: { checked, dataset: { chkboxname } } }) => {
    setIsChecked({
      ...isChecked,
      [chkboxname]: checked
    })
  }




  const forms = [
    {
      title: 'Form0',
      questions: {
        'nodal_skin_eruptions': false, 'shivering': false, 'ulcers_on_tongue': false,
        'muscle_wasting': false, 'spotting_ urination': false, 'high_fever': false, 'sunken_eyes': false,
        'sweating': false, 'pain_behind_the_eyes': false, 'mild_fever': false, 'swelling_of_stomach': false
      }
    },
    {
      title: 'Form1',
      questions: {
        'malaise': false, 'throat_irritation': false, 'weakness_in_limbs': false,
        'pain_during_bowel_movements': false, 'cramps': false, 'enlarged_thyroid': false,
        'slurred_speech': false, 'knee_pain': false, 'muscle_weakness': false, 'movement_stiffness': false
      }
    },
    {
      title: 'Form2',
      questions: {
        'unsteadiness': false, 'bladder_discomfort': false, 'passage_of_gases': false,
        'toxic_look_(typhos)': false, 'irritability': false, 'altered_sensorium': false,
        'red_spots_over_body': false, 'increased_appetite': false, 'family_history': false
      }
    },
    {
      title: 'Form3',
      questions: {
        'mucoid_sputum': false, 'rusty_sputum': false, 'lack_of_concentration': false,
        'visual_disturbances': false, 'receiving_blood_transfusion': false, 'coma': false,
        'blood_in_sputum': false, 'pus_filled_pimples': false, 'skin_peeling': false, 'blister': false
      }
    }

  ]

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  const [checkedState, setCheckedState] = useState([].fill(false));

  function change(key, value, numform) {
    forms[numform].questions[key] = value;
  }

  const submited = [false, false, false, false]

  const [currentForm, setCurrentForm] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [failedStep, setFailedStep] = useState(null);

  const [disableNextButton, setDisableNextButton] = useState(false);
  const [disablePrevButton, setDisablePrevButton] = useState(false);

  function handleNext() {
    if (submited[currentForm]) {

    }
    if (currentForm < 3) {
      setCurrentForm(currentForm + 1);
    }
    if (currentForm == 3) {
      setDisableNextButton(true)
    }

  }
  function handlePrev() {
    if (currentForm > 0) {
      setCurrentForm(currentForm - 1);
    }
    if (currentForm == 0) {
      setDisablePrevButton(true)
    }

  }

  function onSubmit() {
    submited[currentForm] = true;
    handleNext();
    setActiveStep(activeStep + 1)
  }

  const [activeComponent, setActiveComponent] = useState("form1")
  const [check, setCheck] = useState(false)

  const [state, setState] = useState(forms[1]);

  const scrollContainerStyle = { width: "800px", maxHeight: "400px" };
  return (

    <MDBContainer>

      <div className='Formulaire' >
        <React.Fragment>
          <HorizontalStepperWithError actvStep={activeStep} fldStep={failedStep} />
          {/* <CircularStatic /> */}
          <br />
          <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>


            {
              <div id="Questions">

                <FormsContext.Provider value={{ state, setState}}>
                  {currentForm === 0 && <Form0 />}
                  {currentForm === 1 && <Form1 dic={forms[1]} />}

                </FormsContext.Provider>

              </div>
            }


          </div>
          <Stack direction="row" spacing={73}>
            <Button className='Previous' onClick={() => handlePrev()} variant="outlined" startIcon={<ArrowBackIosNewIcon disabled={disablePrevButton} />}>
              Previous
            </Button>
            <Button className='Next' onClick={() => handleNext()} variant="contained" endIcon={<ArrowForwardIosIcon />} disabled={disableNextButton} >
              Next
            </Button>
          </Stack>
        </React.Fragment>
      </div>
    </MDBContainer >
  )
}

export default Formulaire