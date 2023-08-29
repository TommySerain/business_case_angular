import { UserInterface } from "./user-interface";

export interface CollectionInterface {
    id: number;
    name: string;
    user: UserInterface;
}
