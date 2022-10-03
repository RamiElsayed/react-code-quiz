import Container from "@mui/material/Container";
import { GameForm } from "./components/GameForm";
export const Game = () => {
  return (
    <Container maxWidth="md">
      {!gameInProgress && (
        <Box component="section" sx={{ border: "1px solid black" }}>
          <GameForm
            category={category}
            setCategory={setCategory}
            setGameInProgress={setGameInProgress}
          />
        </Box>
      )}
      {gameInProgress && <Box component="section">Quiz</Box>}
    </Container>
  );
};
