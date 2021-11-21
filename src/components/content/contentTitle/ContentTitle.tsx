import { Grid, Typography } from '@material-ui/core'
import useStyles from './ContentTitleStyles.material';

interface IContentTitleProps {
    title: string
}

const ContentTitle = (props: IContentTitleProps) => {
    const classes = useStyles();
    const { title } = props;

    return (
        <Grid container justifyContent="space-between" alignItems="center" spacing={2} className={classes.contentTitle}>
            <Grid item>
                <Typography variant="h6" color="textPrimary">{title}</Typography>
            </Grid>
        </Grid>
    )
}

export default ContentTitle
