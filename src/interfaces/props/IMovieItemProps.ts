import { GridSize } from "@material-ui/core";
import { IMovie } from "../IMovie";

export interface IMovieItemProps {
    item: IMovie, 
    xs: GridSize,
    sm: GridSize,
    md: GridSize,
}