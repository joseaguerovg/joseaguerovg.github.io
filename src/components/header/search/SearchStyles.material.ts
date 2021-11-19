import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            width: "90%",
            maxWidth: "480px",
            padding: '2px 10px',
            paddingRight: '0px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: "50px",
            height: "40px",
        },
        iconButton: {
            padding: 10,
        },
    })
);

export default useStyles;