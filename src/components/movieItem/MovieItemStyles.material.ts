import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        box: {
            position: 'relative',

        },
        image: {
            borderRadius: "5px"
        }
    })
);

export default useStyles;