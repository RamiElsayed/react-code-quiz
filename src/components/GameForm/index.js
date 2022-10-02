import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export const GameForm = ({ category, setCategory }) => {
  const onChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <form>
      <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
        <InputLabel id="gameCategoryLabel">Choose a category</InputLabel>
        <Select
          labelId="gameCategoryLabel"
          id="gameCategory"
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
    </form>
  );
};
