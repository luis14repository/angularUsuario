import { Component, HostBinding} from '@angular/core';
import {ServiceService} from '../../service.service'
import { Router, ActivatedRoute } from '@angular/router';

import {CrearUser} from '../model/crearUser'
import {Phone} from '../model/phone'
import { UserB } from '../model/userBuscar';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {


   @HostBinding('class') classes = 'row';
  constructor (private service: ServiceService, private router: Router, private activatedRoute: ActivatedRoute){}
  
  

  user : CrearUser = {
    name: "",
    email: "",
    password: "",
    phone : []
  };

  phone : Phone = {
    numberPhone : 0,    
    codCiudad   : "",
    codPais     : ""
  }

createUser() {
  this.user.phone = [
    this.phone
  ];
  console.log(this.user);
  this.service.createUser(this.user).subscribe({   
  next: (res) => { 
    console.log(res)},
  error: (err) => console.error(err)
})
}


}
