import axios from "axios";
import { BASE_URI_API } from "./config";

export const theMovieDbApi = axios.create({
    baseURL: BASE_URI_API
})