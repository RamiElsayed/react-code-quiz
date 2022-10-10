import { useGame } from "../../hooks/useGame";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import {useState} from "react";
import {Stack} from "@mui/material";
import {ProgressBar} from "../ProgressBar";
import {Question} from "../Question";


export const Quiz = () => {
  const {
    state: { questions, currentQuestionIndex, percentComplete },
    dispatch,
  } = useGame();
  const [choiceSelected, setChoiceSelected] = useState();
  const [displayQuestion, setDisplayQuestion] = useState(true);

  const onClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setChoiceSelected("");
    } else {
      setDisplayQuestion(false)
    }
    dispatch({
      type: "NEXT_QUESTION",
      payload: {userAnswer: choiceSelected}
    });
  };

  function onChange(event) {
    setChoiceSelected(event.target.value);
  }

  return (
    <div>
      <ProgressBar value={percentComplete} isComplete={displayQuestion}/>
      {displayQuestion &&
          <Question
              questions={questions}
              currentQuestionIndex={currentQuestionIndex}
              onChange={onChange}
              choiceSelected={choiceSelected}
              onClick={onClick}/>
      }
      {!displayQuestion &&
      <Stack spacing={2}>
        <Typography variant="body2" color="text.secondary">
          Congratulations
        </Typography>
        <Button variant="contained" disableElevation>
          View Results
        </Button>
      </Stack>}
    </div>
  );
};
