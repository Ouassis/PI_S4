import React, { useState, useContext } from 'react'
import { FormsContext } from './Helpers/Context'

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box, Checkbox } from '@mui/material';
import Button from '@mui/material/Button';

function TestForm() {

    const {forms, change} = useContext(FormsContext);
    return (
        <div id="Questions">
            <h6> {forms[1].title}</h6>
            {
                <Box>
                    <FormControl>
                        {Object.entries(forms[1].questions).map(([_key, value]) =>
                            <>
                                <FormControlLabel key={_key} name={_key} control=
                                    {<Checkbox
                                        data-chkboxname={_key}
                                        name={_key}
                                        value={value}
                                        defaultChecked={forms[1].questions[_key]}
                                        onChange={() => change(_key, !forms[1].questions[_key],1) &
                                             console.log(forms)}
                                    />}
                                    label={_key.replaceAll("_", " ")}

                                />
                            </>
                        )}
                    </FormControl>
                    <br />
                </Box>            }
            <Button variant="text" onClick={()=> console.log("forms : ", forms)} >Submit</Button>
        </div>
    )
}

export default TestForm