import { useGame } from "../../hooks/useGame";

export const Quiz = () => {
  const {
    state: { questions },
  } = useGame();
  const currentQuestion = questions[0];
  return (
    <div>
      <div>{currentQuestion.question}</div>
      <div>
        <div>
          {currentQuestion.choices.map((choice, index) => {
            return <div key={index}>{choice}</div>;
          })}
        </div>
      </div>
      <button>Next</button>
    </div>
  );
};
