import { Game } from "../../containers/Game";
import { useGame } from "../../hooks/useGame";

export const Quiz = () => {
  const {
    state: { questions, currentQuestionIndex },
    dispatch,
  } = useGame();

  const onClick = () => {
    dispatch({
      type: "NEXT_QUESTION",
    });
  };
  return (
    <div>
      <div>{questions[currentQuestionIndex].question}</div>
      <div>
        <div>
          {questions[currentQuestionIndex].choices.map((choice, index) => {
            return <div key={index}>{choice}</div>;
          })}
        </div>
      </div>
      <button onClick={onClick}>Next</button>
    </div>
  );
};
