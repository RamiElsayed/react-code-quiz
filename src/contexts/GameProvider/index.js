import { createContext, useReducer } from "react";
import { questions } from "../../data/questions";

export const GameContext = createContext();
const initialState = {
  gameInProgress: false,
  category: "Sports",
  questions: questions.Sports,
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
