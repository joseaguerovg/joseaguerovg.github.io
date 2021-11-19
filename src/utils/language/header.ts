interface IHeaderLanguage {
    [key: string]: {
        movies: string,
        tvShows: string
    }
}

export const HeaderLanguage: IHeaderLanguage = {
    en: {
        movies: 'Movies',
        tvShows: 'TV Shows'
    },
    es: {
        movies: 'Películas',
        tvShows: 'Programas de televisión'
    }
}