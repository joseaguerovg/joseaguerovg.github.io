import { Box, Container, Grid } from "@material-ui/core"
import ContentItems from "../content/contentItems/ContentItems"
import ContentTitle from "../content/contentTitle/ContentTitle"
import { itemsDummy } from '../../utils/itemsDummy'
import GenresButton from "../genresButton/GenresButton";
import { Pagination } from "@material-ui/lab";

const Movies = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={3}>
                    <ContentTitle title="Genres" textLink="" pathLink="" />
                    <Grid container spacing={2}>
                        <Grid item>
                            <GenresButton active={false} text="Action"/>
                        </Grid>
                        <Grid item>
                            <GenresButton active={false} text="Adventure"/>
                        </Grid>
                        <Grid item>
                            <GenresButton active={false} text="Animation"/>
                        </Grid>
                        <Grid item>
                            <GenresButton active={true} text="Documentary"/>
                        </Grid>
                        <Grid item>
                            <GenresButton active={false} text="Comedy"/>
                        </Grid>
                        <Grid item>
                            <GenresButton active={false} text="Crime"/>
                        </Grid>
                        <Grid item>
                            <GenresButton active={false} text="Drama"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={9} container>
                    <ContentTitle title="Movies" textLink="" pathLink="" />
                    <ContentItems items={itemsDummy} itemCol={3}/>
                    <Box marginTop={5} marginBottom={5} display="flex" justifyContent="center" width="100%">
                        <Pagination count={10} defaultPage={4} variant="outlined" color="primary" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Movies
