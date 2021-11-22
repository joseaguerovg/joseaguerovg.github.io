import { Box, Grid, Typography } from '@material-ui/core'
import useStyles from './ScoreMovieStyles.material'

const ScoreMovie = (props: { vote_average: number, position: string }) => {

    const { vote_average, position } = props
    const classes = useStyles()
    return (
        <Box position={position} top={10} left={10} borderRadius="50%" className={classes.box}>
            <Grid container alignItems="center" justifyContent="center" className={classes.grid}>
                <Typography color="primary" variant="body1">{vote_average}</Typography>
            </Grid>
        </Box>
    )
}

export default ScoreMovie
