import { Box, Container, Grid, Link, Typography } from '@material-ui/core'
import ContentTitle from '../contentTitle/ContentTitle';
import LinkWithIcon from '../linkWithIcon/LinkWithIcon';
import useStyles from './ContentItemsStyles.material';
import { IContentItemsProps } from './interfaces/IContentItemsProps';

const ContentItems = (props: IContentItemsProps) => {

    const { items } = props

    const classes = useStyles()

    return (
        <Grid container spacing={2}>
            {
                items.map(item => (
                    <Grid item xs={2}>
                        <Link variant="body1" color="textPrimary">
                            <Box style={{position: "relative"}}>
                                <img src={item.image} alt="Img" width="100%"/>
                                <Box position="absolute" top={10} left={10} borderRadius="50%" style={{backgroundColor: "#424242", border: "1px solid #ff452b", width: "35px", height: "35px"}}>
                                    <Grid container alignItems="center" justifyContent="center" style={{height: "100%"}}>
                                        <Typography color="primary" variant="body1">{item.voteAverage}</Typography>
                                    </Grid>
                                </Box>
                            </Box>
                        
                            <Typography color="textPrimary">{item.name}</Typography>
                            <LinkWithIcon pathLink="/" textLink="More details" />
                        </Link>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default ContentItems
