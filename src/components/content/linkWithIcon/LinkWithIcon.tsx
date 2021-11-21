import { Grid, Typography } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useStyles from './LinkWithIconStyles.material';

interface ILinkWithIconsProps {
    textLink: string
}

const LinkWithIcon = (props: ILinkWithIconsProps) => {
    const classes = useStyles();
    const { textLink } = props
    return (
        <Grid container alignItems="center">
            <Typography color="primary" variant="body1">{textLink}</Typography>
            <ArrowForwardIcon className={classes.arrowIcon} color="primary" fontSize="small"/>
        </Grid>
    )
}

export default LinkWithIcon
