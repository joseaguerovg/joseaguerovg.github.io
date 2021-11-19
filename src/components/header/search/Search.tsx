import { InputBase, makeStyles, Theme, createStyles, IconButton, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            width: "90%",
            maxWidth: "480px",
            padding: '2px 6px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: "50px"
        },
        iconButton: {
            padding: 10,
        },
    })
);

const Search = () => {
    const classes = useStyles();
    return (
        <Paper component="form" variant="outlined" className={classes.root}>
            <InputBase
                placeholder="Search movies and tv shows..."
                inputProps={{ 'aria-label': 'search' }}
                className={classes.root}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
        
    )
}

export default Search
