import { createContext, useReducer } from "react";
import { questions } from "../../data/questions";

export const GameContext = createContext();
const initialState = {
  gameInProgress: false,
  category: "Sports",
  questions: questions.Sports,
  currentQuestionIndex: 0,
  percentComplete: 0,
  results: [],
  score: 0
};
const reducer = (state, action) => {
  if (action.type === "START_GAME") {
    return {
      ...state,
      gameInProgress: true,
      questions: questions[state.category],
    };
  }

  if (action.type === "CHANGE_CATEGORY") {
    return { ...state, category: action.payload };
  }

  if (action.type === "NEXT_QUESTION") {
    const { userAnswer } = action.payload
    const isCorrect =  userAnswer === state.questions[state.currentQuestionIndex].correctAnswer;

    const resultObject = {
      ...state.questions[state.currentQuestionIndex],
      userAnswer,
      isCorrect,
    }
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex++,
        percentComplete: state.percentComplete + (100 / state.questions.length),
        score: isCorrect ? state.score++ : state.score,
        results: [...state.results, resultObject],
      };

  }
  if (action.type === "LAST_QUESTION") {
    const { userAnswer } = action.payload
    const isCorrect =  userAnswer === state.questions[state.currentQuestionIndex].correctAnswer;

    const resultObject = {
      ...state.questions[state.currentQuestionIndex],
      userAnswer,
      isCorrect,
    }
    return {
      ...state,
      percentComplete: state.percentComplete + (100 / state.questions.length),
      score: isCorrect ? state.score++ : state.score,
      results: [...state.results, resultObject],
    };

  }
  return state;
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
