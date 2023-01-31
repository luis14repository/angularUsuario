import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {UserB} from './common/model/userB';
import {CrearUser} from './common/model/crearUser';
import {Phone} from './common/model/phone';






@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  API_URI = 'http://localhost:8080/api';


  constructor(private http: HttpClient) { }


getUsers(){
  return this.http.get(`/api/get`);
}

getUseriD(id : string){
  return this.http.get(`${this.API_URI}/${id}`);
}
   
createUser(crearUser : CrearUser){
  return this.http.post(`${this.API_URI}/createuserj`,crearUser);
}

updateUser(userB : UserB){
  return this.http.put(`${this.API_URI}/putUser`,userB);
}


}
