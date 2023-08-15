import { CollectionInterface } from "./collection-interface";
import { UserInterface } from "./user-interface";

export interface NftInterface {
    id: number;
    name: string;
    img:string;
    existing_number: number;
    launch_date: Date;
    launch_price_eth:number;
    launch_price_eur:number;
    collection_id:CollectionInterface;
    user_id:UserInterface
    description:string;
    creator:string;
}
