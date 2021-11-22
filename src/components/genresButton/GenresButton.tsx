import { Button } from '@material-ui/core';
import { IGenresButtonProps } from '../../interfaces/props/IGenresButtonProps';
import useStyles from './GenresButtonStyles.material';

const GenresButton = (props: IGenresButtonProps) => {
    const classes = useStyles();

    const { id, active, text, activeGenres, setActiveGenres, setCurrentPage } = props

    const handleClick = () => {
        let newArray: number[] = []
        if(!activeGenres.includes(id)){
            newArray = [...activeGenres, id]            
        }else{
            newArray = activeGenres.filter(genre => genre !== id)
        }

        setActiveGenres(newArray)
        setCurrentPage(1)
    }

    return (
        <Button onClick={handleClick} variant="outlined" color="primary" className={!active ? classes.default : ''}>{text}</Button>
    )
}

export default GenresButton
