import { Grid, Typography } from '@material-ui/core'
import { IActor } from '../../interfaces/IActor'
import { getActorImage } from '../../utils/getFinalUriImages'
import useStyles from './ActorItemStyles.material'

const ActorItem = (props: { actor: IActor }) => {
    const { actor } = props
    const classes = useStyles()
    
    return (
        <Grid item xs={6} sm={3} md={2}>
            <img src={getActorImage(actor.profile_path)} alt={actor.name} style={{width: "100%"}}/>
            <Typography variant="body1">{actor.name}</Typography>
            <Typography variant="body1" className={classes.textRegular}>{actor.character}</Typography>
        </Grid>
    )
}

export default ActorItem
