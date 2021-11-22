export interface ILanguageContext {
    language: string, 
    setLanguage: Function,
    text: {
        genres: string,
        movies: string,
        overview: string,
        back: string,
        playTrailler: string,
        status: string,
        originalLanguage: string,
        budget: string,
        revenue: string,
        titleActors: string,
        placeholderSearch: string,
        movieNotFound: string,
        searchTitle: string
    },
    setText: Function
}