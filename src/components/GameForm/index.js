import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useGame } from "../../hooks/useGame";

export const GameForm = () => {
  const { category, setCategory, setGameInProgress } = useGame();

  const onChange = (event) => {
    setCategory(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    console.log("submit");
    setGameInProgress(true);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormControl sx={{ width: "100%" }} variant="standard">
        <InputLabel id="gameCategoryLabel">Choose a category</InputLabel>
        <Select
          labelId="gameCategoryLabel"
          id="gameCategoryLabel"
          onChange={onChange}
          value={category}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="sports" sx={{ width: "100%" }}>
            sports
          </MenuItem>
          <MenuItem value="music" sx={{ width: "100%" }}>
            music
          </MenuItem>
          <MenuItem value="science" sx={{ width: "100%" }}>
            science
          </MenuItem>
        </Select>
      </FormControl>
      <Button fullWidth variant="contained" type="submit">
        Contained
      </Button>
    </form>
  );
};
