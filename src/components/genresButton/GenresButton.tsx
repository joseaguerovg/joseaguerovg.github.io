import { Button } from '@material-ui/core';
import { Dispatch } from 'react';
import useStyles from './GenresButtonStyles.material';

const GenresButton = (props: { active: boolean, text: string, id: number, activeGenres: number[], setActiveGenres: Dispatch<number[]>}) => {
    const classes = useStyles();

    const { id, active, text, activeGenres, setActiveGenres } = props

    const handleClick = () => {
        let newArray: number[] = []
        if(!activeGenres.includes(id)){
            newArray = [...activeGenres, id]            
        }else{
            newArray = activeGenres.filter(genre => genre !== id)
        }

        setActiveGenres(newArray)
    }

    return (
        <Button onClick={handleClick} variant="outlined" color="primary" className={!active ? classes.default : ''}>{text}</Button>
    )
}

export default GenresButton
