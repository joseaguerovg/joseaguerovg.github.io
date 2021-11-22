import { Grid } from '@material-ui/core'
import MovieItem from '../../movieItem/MovieItem';
import { IContentItemsProps } from './interfaces/IContentItemsProps';

const ContentItems = (props: IContentItemsProps) => {

    const { items, xs, sm, md } = props

    return (
        <Grid container spacing={2}>
            {
                items.map(item => <MovieItem key={item.id} item={item} xs={xs} sm={sm} md={md} />)
            }
        </Grid>
    )
}

export default ContentItems
