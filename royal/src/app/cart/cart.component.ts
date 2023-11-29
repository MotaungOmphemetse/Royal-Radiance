import { Component, OnInit } from '@angular/core';
import { MessagerService } from '../services/messager.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  // cart items  
  cartItems = [
    // { id: 1, productId: 3 , productName: 'Prodcuct 1', qty: 3, price: 100},
    // { id: 2, productId: 4 ,productName: 'Prodcuct 2',qty: 4, price: 300},
    // { id: 3, productId: 5 ,productName: 'Prodcuct 3', qty: 2, price: 500}
  ]

  cartTotal = 0

  constructor(private  msg: MessagerService) {}

  ngOnInit() {
    this.msg.getMessages().subscribe((product: any) => {
        
      this.cartItems.push({
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage,
        rating:product.rating,
        stock: product.stock,
        brand:product.brand,
        category: product.category,
        thumbnail: product.thumbnail, // Assuming thumbnail is a string URL or file path
      images: product.images,
      })

      this.cartItems.forEach(item => {
        this.cartTotal += (item.qty * item.price)
      });
    })
  }

}
