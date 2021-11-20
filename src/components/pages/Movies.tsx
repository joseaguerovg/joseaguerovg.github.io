import { Box, Container, Grid } from "@material-ui/core"
import ContentItems from "../content/contentItems/ContentItems"
import ContentTitle from "../content/contentTitle/ContentTitle"
import { itemsDummy } from '../../utils/itemsDummy'
import GenresButton from "../genresButton/GenresButton";
import { Pagination } from "@material-ui/lab";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import { theMovieDbApi } from "../../api/theMovieDb";
import { API_KEY } from "../../api/config";

interface IGenre {
    id: number,
    name: string
}

interface IGenresResponse {
    genres: IGenre[]
}

const Movies = () => {

    const [genresList, setGenresList] = useState<IGenre[]>([]);

    const getGenres = async () => {
        const request = await theMovieDbApi.get<IGenresResponse>(`genre/movie/list?api_key=${API_KEY}&language=en-US`)
        setGenresList(request.data.genres)
    }

    useEffect(() => {     
        getGenres()
    }, [])

    return (
        <>
            <Header />
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <ContentTitle title="Genres" textLink="" pathLink="" />
                        
                        <Grid container spacing={2}>
                            {
                                genresList.map(({id, name}) => (
                                    <Grid item key={id}>
                                        <GenresButton active={false} text={name}/>
                                    </Grid>
                                ))
                            }
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
        </>
    )
}

export default Movies
