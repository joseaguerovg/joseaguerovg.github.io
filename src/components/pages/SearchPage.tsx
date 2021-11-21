import { Box, Container } from '@material-ui/core'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { IMovie } from "../../interfaces/IMovie";
import { IMoviesResponse } from "../../interfaces/IMoviesResponse";
import { theMovieDbApi } from '../../api/theMovieDb';
import ContentTitle from '../content/contentTitle/ContentTitle'
import { ILanguageContext } from '../../interfaces/ILanguageContext';
import LanguageContext from '../../context/LanguageContext';
import { API_KEY } from '../../api/config';
import { Pagination } from '@material-ui/lab';
import ContentItems from '../content/contentItems/ContentItems';

const SearchPage = () => {
    const context: ILanguageContext = useContext(LanguageContext);
    let [searchParams, setSearchParams] = useSearchParams();
    const [moviesList, setMoviesList] = useState<IMovie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const query = searchParams.get("query")

    const getResultSearch = useCallback(async () => {
        const request = await theMovieDbApi.get<IMoviesResponse>(`search/movie?api_key=${API_KEY}&query=${query}&language=${context.language}&page=${currentPage}`)
        setMoviesList(request.data.results)
        setTotalPages(request.data.total_pages)
    }, [context, query, currentPage])

    const handlePaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
    }

    useEffect(() => {     
        getResultSearch()
    }, [getResultSearch])

    if(moviesList.length === 0){
        return (
            <Container>
                <ContentTitle title="Movie not found"/>
            </Container>
        )
    }

    return (
        <Container>
            <ContentTitle title={`Search result: ${query}`}/>
            <ContentItems items={moviesList} itemCol={2}/>
            <Box marginTop={5} marginBottom={5} display="flex" justifyContent="center" width="100%">
                <Pagination 
                    key={`pagination-${currentPage}`}
                    count={totalPages} 
                    defaultPage={currentPage} 
                    variant="outlined" 
                    color="primary"
                    onChange={handlePaginationChange} />
            </Box>
        </Container>
    )
}

export default SearchPage
