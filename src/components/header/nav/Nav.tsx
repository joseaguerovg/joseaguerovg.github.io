import { Button, makeStyles, Menu, MenuItem, createStyles, Theme } from '@material-ui/core'
import { MouseEvent, useState, useContext } from 'react'
import LanguageContext from '../../../context/LanguageContext';
import { ILanguageContext } from '../../../interfaces/ILanguageContext';
import languageFormat from './utils/languageFormat';

import { en } from "../../../utils/language/en"
import { es } from "../../../utils/language/es"

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        buttonWidth: {
            minWidth: "auto",
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        }
    })
);

const Nav = () => {
    const context: ILanguageContext = useContext(LanguageContext);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
        if(language === 'en-US'){
            context.setText(en);
        }else{
            context.setText(es);
        }
        handleClose()
    };

    return ( 
        <>
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
                <MenuItem onClick={() => handleChangeLanguage('en-US')}>EN</MenuItem>
                <MenuItem onClick={() => handleChangeLanguage('es-ES')}>ES</MenuItem>
            </Menu>
        </>
    )
}

export default Nav
