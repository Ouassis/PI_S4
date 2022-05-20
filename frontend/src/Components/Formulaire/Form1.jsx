import React, { useState, useContext } from 'react'
import { FormsContext } from './Helpers/Context'

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box, Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
import produce from "immer"
function TestForm() {

    const {state, setState} = useContext(FormsContext);
    
    return (
        <div className="Questions">
            <h6> {state[1].title}</h6>
            {
                <Box>
                    <FormControl>
                        {Object.entries(state[1].questions).map(([_key, value]) =>
                            <>
                                <FormControlLabel key={_key}  control=
                                    {<Checkbox     
                                        value={value}
                                        defaultChecked={state[1].questions[_key]}
                                        onChange={() => setState(currentAnswers => produce(currentAnswers,val => {
                                            val[1].questions[_key] = !val[1].questions[_key]
                                        }))
                                             & console.log(state)}
                                    />}
                                    label={_key.replaceAll("_", " ")}

                                />
                            </>
                        )}
                    </FormControl>
                    <br />
                </Box>            }
            <Button variant="text" onClick={()=> console.log("forms : ", state[1])} >Submit</Button>
        </div>
    )
}

export default TestForm