import { useGame } from "../../hooks/useGame";
import {useState} from "react";
import {ProgressBar} from "../ProgressBar";
import {Question} from "../Question";
import {Results} from "../Results";


export const Quiz = () => {
  const {
    state: { questions, currentQuestionIndex, percentComplete, results, score },
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
          <Results results={results} score={score}/>
      }
    </div>
  );
};
