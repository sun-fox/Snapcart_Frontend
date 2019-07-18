import { Component, OnInit, Input } from "@angular/core";
import { Product } from 'src/app/models/Product';
// import {ProductService} from '../../services/product.service';

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"]
})
export class CartItemComponent implements OnInit {

  // constructor(private productService:ProductService){}
  @Input() cart_item:Product;
  // cart_item = this.productService.cart_item;

  ngOnInit() {}
}
