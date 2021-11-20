import { Button, makeStyles, Menu, MenuItem, createStyles, Theme, Typography } from '@material-ui/core'
import { MouseEvent, useState, useContext, useEffect } from 'react'
import LanguageContext from '../../../context/LanguageContext';
import { ILanguageContext } from '../../../interfaces/ILanguageContext';
import languageFormat from './utils/languageFormat';
import { HeaderLanguage } from "../../../utils/language/header";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        buttonWidth: {
            minWidth: "auto",
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        }
    })
);

interface ITextHeaderLanguage {
    movies: string,
    tvShows: string
}

const Nav = () => {
    const context: ILanguageContext = useContext(LanguageContext);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [textMovie, setTextMovie] = useState<ITextHeaderLanguage>({
        movies: '',
        tvShows: ''
    });
    const open = Boolean(anchorEl);

    const classes = useStyles();

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleChangeLanguage = (language: string) => {
        context.setLanguage(language);
        handleClose()
    };

    useEffect(() => {
        // const languageSelected = languageFormat(context.language)
        const languageSelected: string = languageFormat(context.language)
        setTextMovie(HeaderLanguage[languageSelected])
    }, [context])
    return ( 
        <>
            <Link to="/movies">
                <Typography color="textPrimary" variant="body2">{textMovie.movies}</Typography>
            </Link>
            <Link to="/tvshows">
                <Typography color="textPrimary" variant="body2">{textMovie.tvShows}</Typography>
            </Link>
            <Button 
                variant="outlined" 
                size="small" 
                color="primary" 
                className={classes.buttonWidth}
                aria-controls="menu-language"
                aria-haspopup="true"
                onClick={handleMenu}
            >
                { languageFormat(context.language)?.toUpperCase() }
            </Button>
            <Menu
                id="menu-language"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleChangeLanguage('en')}>EN</MenuItem>
                <MenuItem onClick={() => handleChangeLanguage('es')}>ES</MenuItem>
            </Menu>
        </>
    )
}

export default Nav
