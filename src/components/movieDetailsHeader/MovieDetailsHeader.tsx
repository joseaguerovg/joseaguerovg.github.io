import { useContext, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import classNames from "classnames";
import { Link } from "react-router-dom";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { IMovieDetailsResponse } from "../../interfaces/IMovieDetailsResponse";
import { IStyleMovieListProps } from "../../interfaces/props/IStyleMovieListProps";
import useStyles from "./MovieDetailsHeaderStyles.material";
import { getPosterUri } from "../../utils/getFinalUriImages";
import ScoreMovie from "../scoreMovie/ScoreMovie";
import ModalVideo from "../modalVideo/ModalVideo";
import { ILanguageContext } from "../../interfaces/ILanguageContext";
import LanguageContext from "../../context/LanguageContext";
import useMovieDetails from "../../hooks/useMovieDetails";


const MovieDetailsHeader = (props: { movieDetails: IMovieDetailsResponse, imageBackground: IStyleMovieListProps }) => {
    const context: ILanguageContext = useContext(LanguageContext);
    const { movieDetails, imageBackground } = props
    const classes = useStyles(imageBackground);

    const [open, setOpen] = useState<boolean>(false)
    const { video, getVideo } = useMovieDetails(movieDetails.id?.toString(), context.language)

    const handleOpenModal = () => {
        getVideo()
        setOpen(true)
    }

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
                                        <Typography color="textSecondary" variant="body1">{context.text.back}</Typography>
                                    </Grid>
                                </Link>
                                <img src={getPosterUri(movieDetails.poster_path)} className={classes.imageMovie} alt={movieDetails.title} />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <ScoreMovie position="initial" vote_average={movieDetails.vote_average} />
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
                                    <Button variant="outlined" color="primary" startIcon={<PlayArrowIcon />} onClick={handleOpenModal}>{context.text.playTrailler}</Button>
                                </Box>

                                <Box marginTop={2}>
                                    <Typography variant="h6">{context.text.overview}</Typography>
                                    <Typography variant="body1" className={classes.textRegular}>
                                        {movieDetails.overview}
                                    </Typography>
                                </Box>
                                
                                <Box marginTop={2}>
                                    <Grid container justifyContent="space-between" spacing={2}>
                                        <Grid item>
                                            <Typography variant="body1">{context.text.status}</Typography>
                                            <Typography variant="body2" className={classes.textRegular}>{movieDetails.status}</Typography>
                                        </Grid>

                                        <Grid item>
                                            <Typography variant="body1">{context.text.originalLanguage}</Typography>
                                            <Typography variant="body2" className={classes.textRegular}>{movieDetails.original_language?.toUpperCase()}</Typography>
                                        </Grid>

                                        <Grid item>
                                            <Typography variant="body1">{context.text.budget}</Typography>
                                            <Typography variant="body2" className={classes.textRegular}>${new Intl.NumberFormat("en-US").format(movieDetails.budget)}</Typography>
                                        </Grid>

                                        <Grid item>
                                            <Typography variant="body1">{context.text.revenue}</Typography>
                                            <Typography variant="body2" className={classes.textRegular}>${new Intl.NumberFormat("en-US").format(movieDetails.revenue)}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
            <ModalVideo video={video} open={open} setOpen={setOpen} />
        </>
    )
}

export default MovieDetailsHeader
