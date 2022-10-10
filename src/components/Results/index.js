import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";

export const Results = () => {
    return (<Stack spacing={2}>
        <Typography variant="body2" color="text.secondary">
            Congratulations
        </Typography>
        <Button variant="contained" disableElevation>
            View Results
        </Button>
    </Stack>)
}