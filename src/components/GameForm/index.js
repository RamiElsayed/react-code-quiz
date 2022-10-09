import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useGame } from "../../hooks/useGame";
import {Stack} from "@mui/material";

export const GameForm = () => {
  const {
    state: { category },
    dispatch,
  } = useGame();

  const onChange = (event) => {
    dispatch({
      type: "CHANGE_CATEGORY",
      payload: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: "START_GAME",
    });
  };

  return (
  <form onSubmit={onSubmit}>
    <Stack spacing={4}>
      <FormControl sx={{ width: "100%" }} variant="standard">
        <InputLabel id="gameCategoryLabel">Choose a category</InputLabel>
        <Select
          labelId="gameCategoryLabel"
          id="gameCategory"
          onChange={onChange}
          value={category}
        >
          <MenuItem value="Sports" sx={{ width: "100%" }}>
            Sports
          </MenuItem>
          <MenuItem value="Music" sx={{ width: "100%" }}>
            Music
          </MenuItem>
          <MenuItem value="Science" sx={{ width: "100%" }}>
            Science
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: "100%" }} variant="standard">
        <Button fullWidth variant="contained" type="submit">
          Start Quiz
        </Button>
      </FormControl>
    </Stack>
  </form>
  );
};
