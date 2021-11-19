import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            width: "90%",
            maxWidth: "480px",
            padding: '2px 10px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: "50px"
        },
        iconButton: {
            padding: 10,
        },
    })
);

export default useStyles;