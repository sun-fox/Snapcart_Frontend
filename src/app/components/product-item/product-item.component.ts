import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Product } from "src/app/models/Product";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();

  imgBaseUrl: string =
    "https://engrave.in/media/catalog/product/cache/1/small_image/256x/602f0fa2c1f0d1ba5e241f914e856ff9";

  constructor() {}

  ngOnInit() {}

  onAddToCart(product: Product) {
    this.addToCart.emit(product);
  }
}
