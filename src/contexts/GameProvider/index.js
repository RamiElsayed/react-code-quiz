import React, { Children } from "react";

export const GameContext = React.createContext();

export const GameProvider = ({ Children }) => {
  const [gameInProgress, setGameInProgress] = useState(false);
  const [category, setCategory] = useState("sports");

  return (
    <GameContext.Provider
      value={{ gameInProgress, setGameInProgress, category, setCategory }}
    >
      {Children}
    </GameContext.Provider>
  );
};
