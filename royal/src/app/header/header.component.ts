import { Component , OnInit } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';
import { UserData } from '../interface/user';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userData: UserData | null;
   public totalItem: number = 0;

  constructor(
    private authService: AuthenticationService, 
    private router: Router,
    private cartService: CartService
  ) {
    this.userData = null;
  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res => {
      this.totalItem = res.length
    })
  }

  checkUser(): void {
    this.authService.checkUser().subscribe((userData) => {
      this.userData = userData;
      if (!userData) {
        // Redirect to login page if not authenticated
        this.router.navigate(['user/login']);
      }
      this.router.navigate(['user']);
    });

  }

}
