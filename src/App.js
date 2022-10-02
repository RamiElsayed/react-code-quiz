import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { GameForm } from "./components/GameForm";
import { useState } from "react";
export const App = () => {
  const [gameInProgress, setGameInProgress] = useState(false);
  const [category, setCategory] = useState("sports");
  return (
    <div>
      <Box component="header">NavBar</Box>
      <Container sx={{ border: "1px solid black" }} maxWidth="md">
        <Box component="section">
          <GameForm category={category} setCategory={setCategory} />
        </Box>
        <Box component="section">Quiz</Box>
      </Container>
    </div>
  );
};
