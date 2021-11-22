import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        default: {
            border: "1px solid rgba(219, 219, 219, .5)",
            color: theme.palette.text.primary,
            "&:hover": {
                backgroundColor: "#fff",
                border: "1px solid rgba(219, 219, 219, .9)"
            }
        }
    })
);

export default useStyles;