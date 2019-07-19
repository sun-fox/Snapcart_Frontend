import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';
@Component({
  selector: 'app-show-up-product',
  templateUrl: './show-up-product.component.html',
  styleUrls: ['./show-up-product.component.css']
})
export class ShowUpProductComponent implements OnInit {
  product: Product;
  constructor(private productService: ProductService) { }
  product_id;
  ngOnInit() {
    this.product = this.productService.product[0];
    this.product_id=this.product.product_id;
    console.log(this.product);
  }
  onUpdateProduct(formData: NgForm) {
    console.log("ShowUpComponent", formData.value);
    this.productService.setProduct(formData.value, this.product_id).subscribe(responseData => {
      console.log(responseData);
    });
  }
}
