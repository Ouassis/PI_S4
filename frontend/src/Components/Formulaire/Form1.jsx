import React, { useState, useContext } from 'react'
import { FormsContext } from './Helpers/Context'

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box, Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
/* import forms from '../../file.json'
 */function Form1({dic}) {

    /*    const [isChecked, setIsChecked] = useState({}) */

    function change(key, value) {
        dic.questions[key] = value;
    }

    /*     const onCheckboxChange = ({ target: { checked, dataset: { chkboxname } } }) => {
            setIsChecked({
                ...isChecked,
                [chkboxname]: checked
            })
        }
     */

/*     const { forms } = useContext(FormsContext);
    const [state, setState] = useState(forms[1]);

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }; */
    return (
        <div id="Questions">
            <h6> {dic.title}</h6>
            {
                /* Object.entries(dic.questions).map(([key, value]) => */
                <Box>
                    <FormControl>
                        {Object.entries(dic.questions).map(([_key, value]) =>
                            <>
                                <FormControlLabel key={_key} name={_key} control=
                                    {<Checkbox
                                        data-chkboxname={_key}
                                        name={_key}
                                        value={value}
                                        defaultChecked={dic.questions[_key]}
                                        onChange={() => change(_key, !dic.questions[_key]) &
                                            console.log(dic)}
                                    />}
                                    label={_key.replaceAll("_", " ")}

                                />
                            </>
                        )}
                    </FormControl>
                    <br />
                </Box>
                /* ) */
            }
            <Button variant="text">Submit</Button>
        </div>
    )
}

export default Form1