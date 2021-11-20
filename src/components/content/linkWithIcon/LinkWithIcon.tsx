import { Grid, Link } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useStyles from './LinkWithIconStyles.material';

interface ILinkWithIconsProps {
    textLink: string,
    pathLink: string
}

const LinkWithIcon = (props: ILinkWithIconsProps) => {
    const classes = useStyles();
    const { textLink, pathLink } = props
    return (
        <Grid container alignItems="center">
            <Link color="primary" variant="body1">{textLink}</Link>
            <ArrowForwardIcon className={classes.arrowIcon} color="primary" fontSize="small"/>
        </Grid>
    )
}

export default LinkWithIcon
