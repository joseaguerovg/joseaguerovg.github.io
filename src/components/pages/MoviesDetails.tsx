import { Container, Theme, makeStyles, createStyles, Grid, Typography, Box, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import classNames from 'classnames';
import defaultBg from '../../assets/images/default-bg.jpeg'
import defaultImage from '../../assets/images/default-image.jpeg'
import defaultActor from '../../assets/images/default-actor.jpeg'
import { Link } from 'react-router-dom';
import Header from '../header/Header';

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


const MoviesDetails = () => {
    const prop = {
        image: defaultBg
    }

    const classes = useStyles(prop);
    return (
        <>
            <Header />
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Container className={classNames(classes.contentDetails, classes.textWhite)}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={3}>
                                <Grid container alignItems="center">
                                    <ArrowBackIcon fontSize="small" />
                                    <Typography color="textSecondary" variant="body1">Back</Typography>
                                </Grid>
                                <img src={defaultImage} className={classes.imageMovie} alt="title" />
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
                                        <Typography variant="h5">Shang-Chi and the Legend of the Ten Rings</Typography>
                                        <Typography variant="body1" className={classes.genres}>Action, Adventure, Drama</Typography>
                                    </Grid>
                                </Grid>

                                <Box marginTop={2}>
                                    <Button variant="outlined" color="primary" startIcon={<PlayArrowIcon />}>Play Trailer</Button>
                                </Box>

                                <Box marginTop={2}>
                                    <Typography variant="h6">Overview</Typography>
                                    <Typography variant="body1" className={classes.textRegular}>
                                        Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.
                                    </Typography>
                                </Box>
                                
                                <Box marginTop={2}>
                                    <Grid container justifyContent="space-between" spacing={2}>
                                        <Grid item>
                                            <Typography variant="body1">Status</Typography>
                                            <Typography variant="body2" className={classes.textRegular}>Released</Typography>
                                        </Grid>

                                        <Grid item>
                                            <Typography variant="body1">Original Language</Typography>
                                            <Typography variant="body2" className={classes.textRegular}>EN</Typography>
                                        </Grid>

                                        <Grid item>
                                            <Typography variant="body1">Budget</Typography>
                                            <Typography variant="body2" className={classes.textRegular}>$150,000,000.00</Typography>
                                        </Grid>

                                        <Grid item>
                                            <Typography variant="body1">Revenue</Typography>
                                            <Typography variant="body2" className={classes.textRegular}>$150,000,000.00</Typography>
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
                        <Grid item xs={2}>
                            <Link to="/">
                            <img src={defaultActor} alt="actor name" style={{width: "100%"}}/>
                                <Typography variant="body1">Simu Liu</Typography>
                                <Typography variant="body1" className={classes.textRegular}>Shaun / Shang-Chi</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={2}>
                            <Link to="/">
                                <img src={defaultActor} alt="actor name" style={{width: "100%"}}/>
                                <Typography variant="body1">Simu Liu</Typography>
                                <Typography variant="body1" className={classes.textRegular}>Shaun / Shang-Chi</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={2}>
                            <Link to="/">
                                <img src={defaultActor} alt="actor name" style={{width: "100%"}}/>
                                <Typography variant="body1">Simu Liu</Typography>
                                <Typography variant="body1" className={classes.textRegular}>Shaun / Shang-Chi</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={2}>
                            <Link to="/">
                                <img src={defaultActor} alt="actor name" style={{width: "100%"}}/>
                                <Typography variant="body1">Simu Liu</Typography>
                                <Typography variant="body1" className={classes.textRegular}>Shaun / Shang-Chi</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={2}>
                            <Link to="/">
                                <img src={defaultActor} alt="actor name" style={{width: "100%"}}/>
                                <Typography variant="body1">Simu Liu</Typography>
                                <Typography variant="body1" className={classes.textRegular}>Shaun / Shang-Chi</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={2}>
                            <Link to="/">
                                <img src={defaultActor} alt="actor name" style={{width: "100%"}}/>
                                <Typography variant="body1">Simu Liu</Typography>
                                <Typography variant="body1" className={classes.textRegular}>Shaun / Shang-Chi</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default MoviesDetails
