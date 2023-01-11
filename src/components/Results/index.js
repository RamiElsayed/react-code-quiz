import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Card, CardContent, Grid, Stack} from "@mui/material";
import {useState} from "react";
import {Box} from "@mui/system";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export const Results = ({results, score}) => {
    const [displayResults, setDisplayResults] = useState(false)
    const onClick = () => {
        setDisplayResults(!displayResults)
    }
    return (<Stack spacing={2}>
        <Typography variant="body2" color="text.secondary">
            Congratulations
        </Typography>
        <Button variant="contained" disableElevation onClick={onClick}>
            { displayResults ? "Hide Results" : "Display Results"}
        </Button>
        {displayResults &&
            <Stack>
                {results.map((result, index) => (
                <Box sx={{ minWidth: 275 }} key={index}>
                    <Card variant="outlined">
                        <CardContent>
                            <Grid container spacing={2} sx={{alignItems: "center"}}>
                                <Grid item xs={11}>
                                    <Typography variant="h5" component="div">
                                        {result.question}
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    {result.isCorrect ? <CheckIcon color="success"/> : <ClearIcon color="red"/>}
                                </Grid>
                            </Grid>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Correct Answer: { result.correctAnswer}
                            </Typography>
                            <Typography variant="body2">
                                Your Answer: {result.userAnswer}
                                <br />
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>))}
            </Stack>
        }
    </Stack>)
}