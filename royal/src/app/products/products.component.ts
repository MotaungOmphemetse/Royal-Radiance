import { Component } from '@angular/core';
import { Product } from '../interface/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})export class ProductsComponent {

  products: Product[] = [];
  public productList: any[] = [ ];

    constructor(
      private productService: ProductService, 
      private router: Router,
      private cartService: CartService
    ) { }
   

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        console.log('Product Data:', products);

        this.productList.forEach((a: any) => {
           Object.assign(a, {quantity: 1, total: a.price })
        });

        if (Array.isArray(products)) {
          this.productList = products;
        } else {
          console.error('Invalid response format. Expected an array of products.');
        }
      });
  }

  addToCart(product: any) {
      this.cartService.addToCart(product) 
  }



  navigateProductDetails(productId: number): void {
    console.log('Navigating to product details with ID:', productId);
    this.router.navigate(['/products', productId]);
  } 
  


  

}