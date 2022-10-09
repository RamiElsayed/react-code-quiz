import { useContext } from "react";
import { GameContext } from "../contexts/GameProvider/index";

export const useGame = () => {
  return useContext(GameContext);
};
