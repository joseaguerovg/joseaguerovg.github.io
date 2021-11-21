import { Container, Theme, makeStyles, createStyles, Grid, Typography, Box, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { useCallback, useContext, useEffect, useState } from 'react';
import { IMovieDetailsResponse } from '../../interfaces/IMovieDetailsResponse';
import { theMovieDbApi } from '../../api/theMovieDb';
import { API_KEY } from '../../api/config';
import { ILanguageContext } from '../../interfaces/ILanguageContext';
import LanguageContext from '../../context/LanguageContext';
import { getActorImage, getBackgroundDetailUri, getPosterUri } from '../../utils/getFinalUriImages';
import { SettingsPowerRounded } from '@material-ui/icons';
import ModalVideo from '../modalVideo/ModalVideo';

interface IStyleProps {
    image: string
}

const useStyles = makeStyles<Theme, IStyleProps>((theme: Theme) => 
    createStyles({
        root: {
            width: "100%",
            backgroundImage: ({image}) => `url(${image})`,
            // height: "350px",
        },
        wrapper: {
            backgroundColor: "rgba(0,0,0, .85)",
            height: "100%",
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5)
        },
        contentDetails:{
            zIndex: 2
        },
        textWhite: {
            color: theme.palette.text.secondary
        },
        textRegular: {
            fontWeight: 400
        },
        genres: {
            fontWeight: 400,
            fontStyle: "italic"
        },
        imageMovie: {
            borderRadius: "10px",
            width: "100%",
            maxWidth: "342px",
            marginTop: theme.spacing(1)
        }
    })
);

interface IActor {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number
}

interface IActorResponse {
    id: number,
    cast: IActor
}

interface IVideo{
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: true,
    published_at: string,
    id: string
}

interface IVideosResponse {
    id: number,
    results: IVideo[]
}

const MoviesDetails = () => {
    const context: ILanguageContext = useContext(LanguageContext);
    const { id } = useParams();

    const [movieDetails, setMovieDetails] = useState<IMovieDetailsResponse>({} as IMovieDetailsResponse)
    const [imageBackground, setImageBackground] = useState<IStyleProps>({ image: '' })
    const [actors, setActors] = useState<IActor[]>()
    const [open, setOpen] = useState<boolean>(false)
    const [video, setVideo] = useState<IVideo>({} as IVideo)

    const getMovieDetails = useCallback(async () => {
        const request = await theMovieDbApi.get<IMovieDetailsResponse>(`movie/${id}?api_key=${API_KEY}&language=${context.language}`)
        setMovieDetails(request.data)
        setImageBackground({ image: getBackgroundDetailUri(request.data.backdrop_path) })
    }, [context, id])

    const getActors = useCallback(async () => {
        const request = await theMovieDbApi.get(`movie/${id}/credits?api_key=${API_KEY}`)
        const actorsResponse = request.data.cast.filter((actor: IActor) => actor.known_for_department === 'Acting')
        setActors(actorsResponse)
    }, [id])

    const getVideo = useCallback(async () => {
        const request = await theMovieDbApi.get<IVideosResponse>(`movie/${id}/videos?api_key=${API_KEY}&language=${context.language}`)
        setVideo(request.data.results[0])
    }, [context, id])

    const handleOpenModal = () => {
        getVideo()
        setOpen(true)
    }

    useEffect(() => {
        getMovieDetails()
        getActors()
    }, [getMovieDetails, getActors])

    const classes = useStyles(imageBackground);
    return (
        <>
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Container className={classNames(classes.contentDetails, classes.textWhite)}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={3}>
                                <Link to="/">
                                    <Grid container alignItems="center">
                                        <ArrowBackIcon fontSize="small" className={classes.textWhite} />
                                        <Typography color="textSecondary" variant="body1">Back</Typography>
                                    </Grid>
                                </Link>
                                <img src={getPosterUri(movieDetails.poster_path)} className={classes.imageMovie} alt={movieDetails.title} />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <Box borderRadius="50%" style={{backgroundColor: "#424242", border: "1px solid #ff452b", width: "35px", height: "35px"}}>
                                            <Grid container alignItems="center" justifyContent="center" style={{height: "100%"}}>
                                                <Typography color="primary" variant="body1">7.5</Typography>
                                            </Grid> 
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5">{movieDetails.title}</Typography>
                                        <Typography variant="body1" className={classes.genres}>
                                            {
                                                movieDetails.genres?.map(genre => (`${genre.name}, `))
                                            }
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Box marginTop={2}>
                                    <Button variant="outlined" color="primary" startIcon={<PlayArrowIcon />} onClick={handleOpenModal}>Play Trailer</Button>
                                </Box>

                                <Box marginTop={2}>
                                    <Typography variant="h6">Overview</Typography>
                                    <Typography variant="body1" className={classes.textRegular}>
                                        {movieDetails.overview}
                                    </Typography>
                                </Box>
                                
                                <Box marginTop={2}>
                                    <Grid container justifyContent="space-between" spacing={2}>
                                        <Grid item>
                                            <Typography variant="body1">Status</Typography>
                                            <Typography variant="body2" className={classes.textRegular}>{movieDetails.status}</Typography>
                                        </Grid>

                                        <Grid item>
                                            <Typography variant="body1">Original Language</Typography>
                                            <Typography variant="body2" className={classes.textRegular}>{movieDetails.original_language?.toUpperCase()}</Typography>
                                        </Grid>

                                        <Grid item>
                                            <Typography variant="body1">Budget</Typography>
                                            <Typography variant="body2" className={classes.textRegular}>${new Intl.NumberFormat("en-US").format(movieDetails.budget)}</Typography>
                                        </Grid>

                                        <Grid item>
                                            <Typography variant="body1">Revenue</Typography>
                                            <Typography variant="body2" className={classes.textRegular}>${new Intl.NumberFormat("en-US").format(movieDetails.revenue)}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>

            <Container>
                <Box marginTop={3} marginBottom={5}>
                    <Box marginBottom={2}>
                        <Typography variant="h5" color="textPrimary">List of Actors</Typography>
                    </Box>
                    <Grid container spacing={2}>
                        {
                            actors?.map(actor => (
                                <Grid key={actor.id} item xs={2}>
                                    <img src={getActorImage(actor.profile_path)} alt={actor.name} style={{width: "100%"}}/>
                                    <Typography variant="body1">{actor.name}</Typography>
                                    <Typography variant="body1" className={classes.textRegular}>{actor.character}</Typography>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Container>

            <ModalVideo video={video} open={open} setOpen={setOpen} />
        </>
    )
}

export default MoviesDetails
