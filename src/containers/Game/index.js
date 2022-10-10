import Container from "@mui/material/Container";
import { Box } from "@mui/material";

import { GameForm } from "../../components/GameForm";
import { useGame } from "../../hooks/useGame";
import { Quiz } from "../../components/Quiz";

export const Game = () => {
  const { state } = useGame();
  const boxStyle = {
    p: "20px",
    border: "1px solid black",
    borderRadius: " 8px",
    mt: "20px",
  }

  return (
    <Container maxWidth="md">
      {!state.gameInProgress && (
        <Box
          component="section"
          sx={{...boxStyle}}
        >
          <GameForm />
        </Box>
      )}
      {state.gameInProgress && (
        <Box
            component="section"
            sx={{...boxStyle}}
        >
          <Quiz />
        </Box>
      )}
    </Container>
  );
};
