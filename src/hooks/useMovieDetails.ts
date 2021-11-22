import { useCallback, useState } from "react"
import { API_KEY } from "../api/config"
import { theMovieDbApi } from "../api/theMovieDb"
import { IActor } from "../interfaces/IActor"
import { IMovieDetailsResponse } from "../interfaces/IMovieDetailsResponse"
import { IVideo } from "../interfaces/IVideo"
import { IVideosResponse } from "../interfaces/IVideosResponse"
import { IStyleMovieListProps } from "../interfaces/props/IStyleMovieListProps"
import { getBackgroundDetailUri } from "../utils/getFinalUriImages"

const useMovieDetails = (id?: string, language?: string) => {

    const [movieDetails, setMovieDetails] = useState<IMovieDetailsResponse>({} as IMovieDetailsResponse)
    const [imageBackground, setImageBackground] = useState<IStyleMovieListProps>({ image: '' })
    const [actors, setActors] = useState<IActor[]>()
    const [video, setVideo] = useState<IVideo>({} as IVideo)

    const getMovieDetails = useCallback(async () => {
        const request = await theMovieDbApi.get<IMovieDetailsResponse>(`movie/${id}?api_key=${API_KEY}&language=${language}`)
        setMovieDetails(request.data)
        setImageBackground({ image: getBackgroundDetailUri(request.data.backdrop_path) })
    }, [language, id])

    const getActors = useCallback(async () => {
        const request = await theMovieDbApi.get(`movie/${id}/credits?api_key=${API_KEY}`)
        const actorsResponse = request.data.cast.filter((actor: IActor) => actor.known_for_department === 'Acting')
        setActors(actorsResponse)
    }, [id])

    const getVideo = useCallback(async () => {
        const request = await theMovieDbApi.get<IVideosResponse>(`movie/${id}/videos?api_key=${API_KEY}&language=${language}`)
        setVideo(request.data.results[0])
    }, [language, id])

    return {
        movieDetails,
        imageBackground,
        actors,
        video,
        getMovieDetails,
        getActors,
        getVideo
    }
}

export default useMovieDetails
