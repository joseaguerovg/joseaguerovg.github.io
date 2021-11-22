import { Box, Container, Grid } from "@material-ui/core"
import ContentItems from "../content/contentItems/ContentItems"
import ContentTitle from "../content/contentTitle/ContentTitle"
import GenresButton from "../genresButton/GenresButton";
import { Pagination } from "@material-ui/lab";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { theMovieDbApi } from "../../api/theMovieDb";
import { API_KEY } from "../../api/config";
import { ILanguageContext } from "../../interfaces/ILanguageContext";
import LanguageContext from "../../context/LanguageContext";
import { IMovie } from "../../interfaces/IMovie";
import { IMoviesResponse } from "../../interfaces/IMoviesResponse";
import { IGenre } from "../../interfaces/IGenre";

interface IGenresResponse {
    genres: IGenre[]
}

const Movies = () => {
    const context: ILanguageContext = useContext(LanguageContext);

    const [genresList, setGenresList] = useState<IGenre[]>([]);
    const [moviesList, setMoviesList] = useState<IMovie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [activeGenres, setActiveGenres] = useState<number[]>([])

    const getGenres = useCallback(async () => {
        const request = await theMovieDbApi.get<IGenresResponse>(`genre/movie/list?api_key=${API_KEY}&language=${context.language}`)
        setGenresList(request.data.genres)
    }, [context])

    const getMovies = useCallback(async () => {
        const genresQuery = activeGenres.join(',')
        const request = await theMovieDbApi.get<IMoviesResponse>(`discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&language=${context.language}&page=${currentPage}&with_genres=${genresQuery}`)
        setMoviesList(request.data.results)
        setTotalPages(request.data.total_pages)
    }, [context, currentPage, activeGenres])

    const handlePaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
    }

    const isGenreActive = (id: number): boolean => {
        return activeGenres.includes(id)
    }

    useEffect(() => {     
        getGenres()
        getMovies()
    }, [getGenres, getMovies])

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ContentTitle title="Genres"/>
                    
                    <Grid container spacing={2}>
                        {
                            genresList.map(({id, name}) => (
                                <Grid item key={id}>
                                    <GenresButton id={id} activeGenres={activeGenres} setActiveGenres={setActiveGenres} active={isGenreActive(id)} text={name}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
                <Grid item xs={9} container>
                    <ContentTitle title="Movies"/>
                    <ContentItems items={moviesList} itemCol={3}/>
                    <Box marginTop={5} marginBottom={5} display="flex" justifyContent="center" width="100%">
                        <Pagination 
                            key={`pagination-${currentPage}`}
                            count={totalPages} 
                            defaultPage={currentPage} 
                            variant="outlined" 
                            color="primary"
                            onChange={handlePaginationChange} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Movies
