import { GridSize } from '@material-ui/core'
import { IMovie } from '../../../../interfaces/IMovie';
export interface IContentItemsProps {
    items: IMovie[],
    xs: GridSize,
    sm: GridSize,
    md: GridSize
}