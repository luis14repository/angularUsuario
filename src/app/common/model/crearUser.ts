import { Phone } from "./phone" 

export interface CrearUser {
   
    email? : string;
    name? : string;
    password? : string;
    state?  : string;
    phone? : Phone[];


}