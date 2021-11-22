import { Container, Grid, Typography, Box } from '@material-ui/core'
import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ILanguageContext } from '../../interfaces/ILanguageContext';
import LanguageContext from '../../context/LanguageContext';
import useMovieDetails from '../../hooks/useMovieDetails';
import ActorItem from '../actorItem/ActorItem';
import MovieDetailsHeader from '../movieDetailsHeader/MovieDetailsHeader';

const MoviesDetails = () => {
    const context: ILanguageContext = useContext(LanguageContext);
    const { id } = useParams();

    const {
        movieDetails,
        imageBackground,
        actors,
        getMovieDetails,
        getActors,
    } = useMovieDetails(id, context.language)

    useEffect(() => {
        getMovieDetails()
        getActors()
    }, [getMovieDetails, getActors])

    return (
        <>
            <MovieDetailsHeader movieDetails={movieDetails} imageBackground={imageBackground} />

            <Container>
                <Box marginTop={3} marginBottom={5}>
                    <Box marginBottom={2}>
                        <Typography variant="h5" color="textPrimary">List of Actors</Typography>
                    </Box>
                    <Grid container spacing={2}>
                        {
                            actors?.map(actor => (<ActorItem key={actor.id} actor={actor} />))
                        }
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default MoviesDetails
