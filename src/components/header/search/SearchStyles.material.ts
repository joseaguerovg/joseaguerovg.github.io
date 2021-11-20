import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            width: '90%',
            maxWidth:'480px',
            paddingRight: '0px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: "50px",
            backgroundColor: '#fff',
            border: "1px solid rgba(0, 0, 0, 0.12)",
            height: '40px',
        },
        input: {
            padding: '2px 10px',
            width: "100%"
        },
        iconButton: {
            padding: 10,
        },
    })
);

export default useStyles;