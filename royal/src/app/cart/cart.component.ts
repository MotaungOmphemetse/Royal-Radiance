import { Component, OnInit } from '@angular/core';
import { MessagerService } from '../services/messager.service.service';
import { Product } from '../interface/product';
import { CartService } from '../services/cart.service';
import { Cart } from '../interface/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  cartTotal = 0;

  constructor(
    private msg: MessagerService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems(); 
  }

  handleSubscription() {
    this.msg.getMessages().subscribe((product: Product) => {
      this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cartService.getcartItems().subscribe((items: Cart[]) => {
      this.cartItems = items;
      console.log("fuck: ",items);
      this.calculateCartTotal();
    });
  }

  // Calculate
  calculateCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }
}