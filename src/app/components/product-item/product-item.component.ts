import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Product } from "src/app/models/Product";
import { ProductService } from "../../services/product.service"
import { ShowUpProductComponent } from "../show-up-product/show-up-product.component"
import { MatDialog } from "@angular/material";
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

  constructor(public productService:ProductService,public dailog:MatDialog) {}

  ngOnInit() {}

  onAddToCart(product: Product) {
    this.addToCart.emit(product);
  }

  openDialog(product_id) {
    console.log("product-item",product_id)
    this.productService.getProduct(product_id).subscribe(responseData => {
      this.productService.product = responseData;
      console.log(this.productService.product);
      let dialogRef = this.dailog.open(ShowUpProductComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log('submission status:' + result)
      });
    });
  }
}
