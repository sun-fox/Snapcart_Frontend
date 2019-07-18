import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/Product";
import {ProductService} from '../../services/product.service';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  // @Input() cart_items: Product[];
  @Input() total_amount: any;
  // cart_items:Product[];
  // total_amount:any;

  constructor(private productService:ProductService){} 
      cart_items = this.productService.cart_items;
      
    
  ngOnInit() {
    
    
  }
}
