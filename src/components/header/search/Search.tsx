import { InputBase, IconButton, Box, Snackbar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useStyles from "./SearchStyles.material";

const Search = () => {
    const classes = useStyles();
    const [query, setQuery] = useState<string>("")
    const [openError, setOpenError] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setQuery(event.target.value)
    }

    const handleClick = () => {
        pushNavigate()
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        pushNavigate()
    }

    const pushNavigate = () =>{
        if(query !== ''){
            navigate(`/search?query=${query}`)
        }else{
            setOpenError(true)
        }
    }

    const handleClose = () => {
        setOpenError(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={classes.root}>
                <InputBase
                    placeholder="Search movies..."
                    inputProps={{ 'aria-label': 'search' }}
                    className={classes.input}
                    onChange={handleChange}
                />
                <IconButton type="submit" onClick={handleClick} className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </form>
            <Snackbar 
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={openError} 
                autoHideDuration={4000} 
                onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    The field cannot be empty
                </Alert>
            </Snackbar>
        </>
        
    )
}

export default Search
