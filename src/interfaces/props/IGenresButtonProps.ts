import { Dispatch } from "react";

export interface IGenresButtonProps {
    active: boolean, 
    text: string, 
    id: number, 
    activeGenres: number[], 
    setActiveGenres: Dispatch<number[]>,
    setCurrentPage: Dispatch<number>
}