import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Product } from "src/app/models/Product";
import { ProductService } from "../../services/product.service";
import { MatDialog } from "@angular/material";
import { PopUpProductFormComponent } from '../pop-up-product-form/pop-up-product-form.component';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();

  products: Product[];

  constructor(private productService: ProductService,public dailog : MatDialog) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  onSearch(keyword: string) {
    if (keyword.length > 2) {
      this.productService.searchProducts(keyword).subscribe(products => {
        this.products = products;
      });
    } else {
      this.productService.getProducts().subscribe(products => {
        this.products = products;
      });
    }
  }

  addToCart(product: Product) {
    this.onAddToCart.emit(product);
    console.log("recieved at products component")
  }

  openDialog(){
    let dialogRef = this.dailog.open(PopUpProductFormComponent);
 
    dialogRef.afterClosed().subscribe(result =>{
       console.log('submission status:' +result)
    })
   }
}
