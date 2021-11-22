import { BASE_URI_IMAGES, SIZE_ACTOR_IMAGE, SIZE_BG_IMAGE, SIZE_POSTER_IMAGE } from "../api/config";
import notImageActor from '../assets/images/not-image-actor.jpg'
import notImageMovie from '../assets/images/not-image-movie.jpg'

export function getPosterUri(path: string){
    return path !== null ? `${BASE_URI_IMAGES}${SIZE_POSTER_IMAGE}${path}` : notImageMovie
}

export function getBackgroundDetailUri(path: string){
    return `${BASE_URI_IMAGES}${SIZE_BG_IMAGE}${path}`
}

export function getActorImage(path: string){
    return path !== null ? `${BASE_URI_IMAGES}${SIZE_ACTOR_IMAGE}${path}` : notImageActor
}