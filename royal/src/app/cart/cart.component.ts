import { Component, OnInit } from '@angular/core';
import { MessagerService } from '../services/messager.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems = []; // Assuming cartItems is an array of items
  cartTotal = 0;

  constructor(private  msg: MessagerService) {}

  ngOnInit() {

    this.msg.getMessages().subscribe(products => {
      // Assuming product is an item you want to add to cartItems
      console.log(products);
      // this.cartItems.push(product);

      // this.cartItems.forEach(item => {
      //   this.cartTotal += (item.qty * item.price)
      // });
    })
  }

}import { Product } from '../product';

