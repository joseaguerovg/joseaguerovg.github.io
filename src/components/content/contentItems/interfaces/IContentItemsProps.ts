import { IContentItems } from "./IContentItems";

export interface IContentItemsProps {
    items: IContentItems[],
    title: string,
    textLink?: string,
    pathLink?: string
}