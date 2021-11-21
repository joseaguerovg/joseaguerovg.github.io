import { Container, Grid } from '@material-ui/core';
import useStyles from './HeaderStyles.material';
import Logo from './Logo';
import Nav from './nav/Nav';
import Search from './search/Search';

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <Grid 
                    container 
                    alignItems="center" 
                    justifyContent="space-between" 
                    className={classes.gridContent}
                >   
                    <Grid item xs={2} sm={2}>
                        <Logo></Logo>
                    </Grid>
                    <Grid item xs container justifyContent="center">
                        <Search></Search>
                    </Grid>
                    <Grid item>
                        <Nav/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Header
