import { makeStyles, Theme, createStyles, Button } from '@material-ui/core';

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

const GenresButton = (props: { active: boolean, text: string }) => {
    const classes = useStyles();
    return (
        <Button variant="outlined" color="primary" className={!props.active ? classes.default : ''}>{props.text}</Button>
    )
}

export default GenresButton
