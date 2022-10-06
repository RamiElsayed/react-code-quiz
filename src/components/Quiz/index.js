import { useGame } from "../../hooks/useGame";

export const Quiz = () => {
  const {
    state: { questions, currentQuestionIndex },
    dispatch,
  } = useGame();

  const onClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      dispatch({
        type: "NEXT_QUESTION",
      });
    }
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
