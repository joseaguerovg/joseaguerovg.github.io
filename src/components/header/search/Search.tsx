import { InputBase, IconButton, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "./SearchStyles.material";

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
