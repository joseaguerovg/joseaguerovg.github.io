import { Grid, Typography } from '@material-ui/core'
import LinkWithIcon from '../linkWithIcon/LinkWithIcon';
import useStyles from './ContentTitleStyles.material';

interface IContentTitleProps {
    title: string,
    textLink?: string,
    pathLink?: string
}

const ContentTitle = (props: IContentTitleProps) => {
    const classes = useStyles();
    const { title, textLink, pathLink } = props;

    return (
        <Grid container justifyContent="space-between" alignItems="center" spacing={2} className={classes.contentTitle}>
            <Grid item>
                <Typography variant="h6" color="textPrimary">{title}</Typography>
            </Grid>
            <Grid item>
                <LinkWithIcon pathLink={pathLink} textLink={textLink} />
            </Grid>
        </Grid>
    )
}

export default ContentTitle
