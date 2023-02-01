import { Phone } from "./phone" 

export interface CrearUser {
    id?: number;
    email? : string;
    name? : string;
    password? : string;
    state?  : string;
    phone? : Phone[];


}