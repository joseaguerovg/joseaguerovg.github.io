import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        contentTitle: {
            marginTop: "20px"
        },
        arrowIcon: {
            marginLeft: "8px"
        }
    })
);

export default useStyles;