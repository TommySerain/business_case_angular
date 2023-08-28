import { CollectionInterface } from "./collection-interface";
import { CountryInterface } from "./country-interface";
import { NftInterface } from "./nft-interface";

export interface UserInterface {
    id?: number;
    email: string;
    roles?: string[];
    password: string;
    firstname: string;
    lastname: string;
    pseudo:string;
    gender: string;
    birthdate: string;
    address: string;
    zipcode: string;
    country: CountryInterface;
    nft?:NftInterface[];
    collection?:CollectionInterface[];
}
