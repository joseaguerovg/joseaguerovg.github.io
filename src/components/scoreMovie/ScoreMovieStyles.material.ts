import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        box: {
            backgroundColor: "#424242", 
            border: "1px solid #ff452b",
            width: "35px", 
            height: "35px"
        },
        grid: {
            height: "100%"
        }
    })
);

export default useStyles;