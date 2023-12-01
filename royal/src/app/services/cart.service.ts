import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Cart } from '../interface/cart';
import { cartUrl } from '../config/api';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartUrl = 'https://dummyjson.com/carts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getcartItems(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.cartUrl).pipe(
      map((result: any[]) => {
        console.log('API Response:', result);
        // let cartItems: Cart[] = [];
        const cartItems: Cart[] = result || [];

        for (let item of result) {
          let productExists = false;

          for (let i in cartItems) {
            if (cartItems[i].productId === item.productId) {
              cartItems[i].qty++;
              productExists = true;
              break;
            }
          }

          if (!productExists) {
            const newItem: Cart = {
              id: item.id,
              productId: item.productId,
              qty: item.qty,
              title: item.title,
              images: item.image,
              price: item.price,
            };

            cartItems.push(newItem);
          }
        }

        return cartItems;
      }),
      catchError((error) => {
        console.error('Error fetching cart items:', error);
        return throwError(error);
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(this.cartUrl, { product }, this.httpOptions).pipe(
      catchError((error) => {
        console.error('Error adding product to cart:', error);
        return throwError(error);
      })
    );
  }
}