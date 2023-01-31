import { Component } from '@angular/core';

import {ServiceService} from '../../service.service'
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {


  // @HostBinding('class') classes = 'row';
  constructor (private service: ServiceService, private router: Router, private activatedRoute: ActivatedRoute){}
  
  users : any =[];



getUsersA() {
  this.service.getUsers().subscribe({
  next: (res) => {
    this.users = res,
    console.log(this.users)},
  error: (err) => console.error(err)
})
}

}