import { Component, Input } from '@angular/core';
import { Userservice } from '../get-single-user.service';
import { UserData } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  

  constructor(private router: Router) {}

  gotoEditProfile() {
    this.router.navigate(['../edit']);
  }
}
