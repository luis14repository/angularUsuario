 
import {Phone} from './phone';

 export interface UserB{

    id?: number;
    email? : string;
    name? : string;
    password? : string;
    state?  : string;
    phone? : Phone[];
    datecreate? : string;
    dateupdate?: string;
    lastadmissionDate? : string;
    token? : string;
 }