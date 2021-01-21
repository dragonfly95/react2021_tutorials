import React from 'react';
import {
    Button,
    ButtonGroup,
    FormControl,
    FormControlLabel,
    FormLabel, makeStyles,
    Radio,
    RadioGroup,
    TextField
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({  // style 요소 선언
    margin: {
        margin: theme.spacing(2),
    }
}));

export default function TodoApp({ task, tasks, inputTask, addTask }) {
    debugger
    console.log('./components/TodoApp.js')

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    const classes = useStyles();   // 생성
    return (
        <div>
            <TextField id="standard-basic" label="Standard"
                       onChange={(e) => inputTask(e.target.value)} />
            <Button variant="contained" color="primary" className={classes.margin}
                    onClick={() => addTask(task)}>
                Hello World
            </Button>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                    </RadioGroup>
                </FormControl>
            </div>

            <ul>
                {
                    tasks.map(function(item, i) {
                        return ( <li key={i}>{item}</li>);
                    })
                }
            </ul>
        </div>
    )
}