import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from "src/app/models/Product";
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-view-pane',
  templateUrl: './view-pane.component.html',
  styleUrls: ['./view-pane.component.css']
})
export class ViewPaneComponent implements OnInit {
  // @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();
  // products: Product[];
  title = "snapcart";
  cart_items: Product[] = [];
  total_amount = 0;


  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  // addToCart(product: Product){
  //   this.onAddToCart.emit(product);
  //   console.log("recieved at view-pane component")
  // }

  addToCart(product: Product) {
    // title = "snapcart";
    
  
    console.log("gotcha view-pane", this.productService.cart_items);
    // check if the product already exists in the this.cart_items. if yes then increase the qty by one
    console.log("received at app component");
    var exists = 0;
    for (let item of this.productService.cart_items) {
      if (item.product_id === product.product_id) {
        item["quantity"] = item["quantity"] + 1;
        exists = 1;
      }
    }
    // if product not exists then add to cart as new product with qty one
    if (exists == 0) {
      product["quantity"] = 1;
      this.productService.cart_items.push(product);
    }
    // calculate total amount
    var total = 0;
    for (let item of this.productService.cart_items) {
      total = total + item.price * item.quantity;
    }
    this.productService.total_amount = total;
    // this.cart_items= this.productService.cart_items;
    this.total_amount = this.productService.total_amount;
    
  }
}
