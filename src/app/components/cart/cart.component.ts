import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/Product";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  @Input() cart_items: Product[];
  @Input() total_amount: any;

  constructor() {}

  ngOnInit() {}
}
