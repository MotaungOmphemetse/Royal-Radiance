import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Userservice } from '../get-single-user.service';
import { UserData } from './edit';
//import { User } from '../user/user.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {

  user: UserData = {
    id: 1,
    email: 'John@gmail.com',
    username: 'johnd',
    password: 'm38rmF$',
    name: {
      firstname: 'John Dash',
      
    },
    address: {
      city: 'kilcoole',
      street: '7835 new road',
      number: 3,
      zipcode: '12926-3874',
    
    },
    phone: '1-570-236-7033'
  };
  constructor() {}
}
