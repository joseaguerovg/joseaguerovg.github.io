import { Box, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import useStyles from './MovieItemStyles.material'
import { IMovieItemProps } from '../../interfaces/props/IMovieItemProps';
import { getPosterUri } from '../../utils/getFinalUriImages';
import LinkWithIcon from '../content/linkWithIcon/LinkWithIcon';
import ScoreMovie from '../scoreMovie/ScoreMovie';

const MovieItem = (props: IMovieItemProps) => {
    const { item, xs, sm, md } = props;
    const finalImageUri = getPosterUri(item.poster_path)
    const linkMovie = `/movies/${item.id}`

    const classes = useStyles()

    return (
        <Grid item xs={xs} md={md} sm={sm}>
            <Link to={linkMovie}>
                <Box className={classes.box}>
                    <img src={finalImageUri} alt="Img" width="100%" className={classes.image}/>
                    <ScoreMovie vote_average={item.vote_average} position="absolute"/>
                </Box>
            
                <Typography color="textPrimary">{item.title}</Typography>
                <LinkWithIcon textLink="More details" />
            </Link>
        </Grid>
    )
}

export default MovieItem
