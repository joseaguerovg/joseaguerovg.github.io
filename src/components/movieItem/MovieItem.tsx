import { Box, Grid, GridSize, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { IMovie } from '../../interfaces/IMovie'
import { getPosterUri } from '../../utils/getFinalUriImages';
import LinkWithIcon from '../content/linkWithIcon/LinkWithIcon';

const MovieItem = (props: {item: IMovie, itemCol: GridSize}) => {
    const {item, itemCol} = props;
    const finalImageUri = getPosterUri(item.poster_path)
    const linkMovie = `/movies/${item.id}`

    return (
        <Grid item xs={itemCol}>
            <Link to={linkMovie}>
                <Box style={{position: "relative"}}>
                    <img src={finalImageUri} alt="Img" width="100%"/>
                    <Box position="absolute" top={10} left={10} borderRadius="50%" style={{backgroundColor: "#424242", border: "1px solid #ff452b", width: "35px", height: "35px"}}>
                        <Grid container alignItems="center" justifyContent="center" style={{height: "100%"}}>
                            <Typography color="primary" variant="body1">{item.vote_average}</Typography>
                        </Grid>
                    </Box>
                </Box>
            
                <Typography color="textPrimary">{item.title}</Typography>
                <LinkWithIcon textLink="More details" />
            </Link>
        </Grid>
    )
}

export default MovieItem
