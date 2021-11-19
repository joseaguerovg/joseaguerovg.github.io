import { Button, Container, createStyles, Grid, Link, makeStyles, Menu, MenuItem, Theme } from '@material-ui/core';
import { useState } from 'react';
import logo from '../../assets/images/logo.svg'
import Logo from './Logo';
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
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
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
                        <Link color="textPrimary" variant="body2">Movies</Link>
                        <Link color="textPrimary" variant="body2">TV Shows</Link>
                        <Button 
                            variant="outlined" 
                            size="small" 
                            color="primary" 
                            className={classes.buttonWidth}
                            aria-controls="menu-language"
                            aria-haspopup="true"
                            onClick={handleMenu}
                        >
                            EN
                        </Button>
                        <Menu
                            id="menu-language"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
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
                            <MenuItem onClick={handleClose}>EN</MenuItem>
                            <MenuItem onClick={handleClose}>ES</MenuItem>
                        </Menu>
                        
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Header
