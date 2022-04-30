import React, { useState, useContext } from 'react'
import { FormsContext } from './Helpers/Context'

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box, Checkbox } from '@mui/material';
import Button from '@mui/material/Button';

function Form0() {
/*     const { forms } = useContext(FormsContext);
    const [state, setstate] = useState(false);
    function change(key, value, numform) {
        forms[numform].questions[key] = value;
    } */
    return (
        <div id="Questions">

 {/*            <h6> {forms[0].title}</h6>

            <Box>
                <FormControl>
                    {Object.entries(forms[0].questions).map(([_key, value]) =>
                        <>
                            <FormControlLabel key={_key} name={_key} control=
                                {<Checkbox
                                    data-chkboxname={_key}
                                    id={_key}
                                    defaultChecked={forms[0].questions[_key]}
                                    onChange={() => change(_key, !forms[0].questions[_key], 0) &
                                        console.log(forms[0])}
                                />}
                                label={_key.replaceAll("_", " ")}

                            />
                        </>
                    )}
                </FormControl>
                <br />
            </Box>

            <Button variant="text">Submit</Button> */}
        </div>
    )
}

export default Form0