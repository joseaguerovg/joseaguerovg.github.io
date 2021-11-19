import { makeStyles, Theme, createStyles } from "@material-ui/core";

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

export default useStyles;