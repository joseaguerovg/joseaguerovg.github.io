import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        box: {
            position: 'relative',

        },
        image: {
            borderRadius: "5px"
        },
        contentGenres: {
            [theme.breakpoints.up('xs')]: {
                display: "none",
                marginTop: theme.spacing(2)
            },
            [theme.breakpoints.up('sm')]: {
                display: "flex"
            }
        },
        buttonGenresXs: {
            marginTop: theme.spacing(5),
            width: "100%",
            [theme.breakpoints.up('xs')]: {
                display: "block"
            },
            [theme.breakpoints.up('sm')]: {
                display: "none"
            }
        }
    })
);

export default useStyles;