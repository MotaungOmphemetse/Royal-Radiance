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

  public products: any = []
  public grandTotal!: number;

  constructor(
    private msg: MessagerService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.getProducts()
    .subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice(); 
    }) 
  }  

  removeItem(item: any) {
    this.cartService.removeCartItem(item)
  }

  emptyCart() {
    this.cartService.removeAllCart()
  }
}