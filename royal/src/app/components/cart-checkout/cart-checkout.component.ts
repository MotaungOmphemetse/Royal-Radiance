import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {
  @Input() cartItem: any;
  cartTotal = 0
  constructor() {}

  ngOnInit(): void {
    
  }
}
