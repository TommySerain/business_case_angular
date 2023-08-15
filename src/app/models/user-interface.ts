import { CountryInterface } from "./country-interface";

export interface UserInterface {
    id: number;
    email: string;
    roles: string[];
    password: string;
    firstname: string;
    lastname: string;
    pseudo:string;
    gender: number;
    birthdate: string;
    address: string;
    zipcode: string;
    country_id: CountryInterface;
}
