import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';
import { ILanguageContext } from '../../interfaces/ILanguageContext';
import Logo from './Logo';
import Nav from './nav/Nav';
import Search from './search/Search';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            width: "100%",
            boxShadow: "0 4px 4px 0 rgba(219, 219, 219, .25)",
        },
        container: {
            height: "70px"
        },
        gridContent: {
            height: "100%"
        },
        buttonWidth: {
            minWidth: "auto",
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        }
    })
);

const Header = () => {
    const context: ILanguageContext = useContext(LanguageContext);
    const classes = useStyles(context.language);
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
                    <Grid item md={2} sm={4} xs={5} container justifyContent="space-between" alignItems="center">
                        <Nav/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Header
