import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        textRegular: {
            fontWeight: 400
        }
    })
);

export default useStyles;