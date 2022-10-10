import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


export const Question = ({questions,currentQuestionIndex,onChange, choiceSelected,onClick}) => {

    return (<Box>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
                {questions[currentQuestionIndex].question}
            </FormLabel>
            <RadioGroup name="radio-buttons-group" onChange={onChange}>
                {questions[currentQuestionIndex].options.map((choice, index) => {
                    return <FormControlLabel
                        value={choice}
                        control={<Radio/>}
                        label={choice}
                        key={index}
                    />
                })}
            </RadioGroup>
        </FormControl>
        {choiceSelected && (
            <FormControl sx={{width: "100%"}} variant="standard">
                <Button variant="contained" onClick={onClick}>
                    Next
                </Button>
            </FormControl>)}
    </Box>
    )
}