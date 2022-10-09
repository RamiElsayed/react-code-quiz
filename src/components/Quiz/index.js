import { useGame } from "../../hooks/useGame";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from "@mui/material/Button";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from "react";
import {Stack} from "@mui/material";
import {ProgressBar} from "../ProgressBar";


export const Quiz = () => {
  const {
    state: { questions, currentQuestionIndex, percentComplete, displayQuestion },
    dispatch,
  } = useGame();
  const [choiceSelected, setChoiceSelected] = useState(false);
  const onClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      dispatch({
        type: "NEXT_QUESTION",
      });
    }
    if (currentQuestionIndex === questions.length - 1) {
      dispatch({
        type: "LAST_QUESTION",
      });
    }
  };

  function onChange() {
    setChoiceSelected(true);
  }

  return (
    <div>
      <ProgressBar value={percentComplete} isComplete={displayQuestion}/>
      {displayQuestion && <Box>
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
      }
      {!displayQuestion &&
      <Stack spacing={2}>
        <Typography variant="body2" color="text.secondary">
          Congratulations
        </Typography>
        <Button variant="contained" disableElevation>
          View Score
        </Button>
      </Stack>}
    </div>
  );
};
