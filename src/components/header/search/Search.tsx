import { InputBase, IconButton, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "./SearchStyles.material";

const Search = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <InputBase
                placeholder="Search movies..."
                inputProps={{ 'aria-label': 'search' }}
                className={classes.input}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Box>
        
    )
}

export default Search
