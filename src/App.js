import { Box } from "@mui/system";

import { Game } from "./containers/Game";
import { GameProvider } from "./contexts/GameProvider";

export const App = () => {
  return (
    <div>
      <Box component="header">NavBar</Box>
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
};
