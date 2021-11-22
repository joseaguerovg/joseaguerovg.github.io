import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { IStyleMovieListProps } from "../../interfaces/props/IStyleMovieListProps";

const useStyles = makeStyles<Theme, IStyleMovieListProps>((theme: Theme) => 
    createStyles({
        root: {
            width: "100%",
            backgroundImage: ({image}) => `url(${image})`,
        },
        wrapper: {
            backgroundColor: "rgba(0,0,0, .85)",
            height: "100%",
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5)
        },
        contentHeader:{
            [theme.breakpoints.up('md')]: {
                alignItems: "center"
            }
        },
        contentDetails:{
            zIndex: 2
        },
        textWhite: {
            color: theme.palette.text.secondary
        },
        textRegular: {
            fontWeight: 400
        },
        genres: {
            fontWeight: 400,
            fontStyle: "italic"
        },
        imageMovie: {
            borderRadius: "10px",
            width: "100%",
            maxWidth: "342px",
            marginTop: theme.spacing(1)
        }
    })
);

export default useStyles;