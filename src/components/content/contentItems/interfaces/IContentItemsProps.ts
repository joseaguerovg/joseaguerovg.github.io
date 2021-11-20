import { IContentItems } from "./IContentItems";
import { GridSize } from '@material-ui/core'
export interface IContentItemsProps {
    items: IContentItems[],
    itemCol: GridSize
}