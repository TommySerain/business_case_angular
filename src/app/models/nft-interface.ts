import { CategoryInterface } from "./category-interface";
import { CollectionInterface } from "./collection-interface";
import { UserInterface } from "./user-interface";

export interface NftInterface {
    id: number,
    name: string,
    img: string,
    existingNumber: number,
    launchDate: Date,
    launchPriceEth: number,
    launchPriceEur: number,
    collection: CollectionInterface,
    user: UserInterface,
    description: string,
    creator: string,
    category:CategoryInterface[]
}
