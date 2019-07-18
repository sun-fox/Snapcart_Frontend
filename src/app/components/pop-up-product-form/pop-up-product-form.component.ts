import { Component, OnInit, ElementRef } from '@angular/core';
// import {FormsModule,FormBuilder, FormGroup, ngForm} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pop-up-product-form',
  templateUrl: './pop-up-product-form.component.html',
  styleUrls: ['./pop-up-product-form.component.css']
})
export class PopUpProductFormComponent implements OnInit {

  constructor(private http:HttpClient, private productService:ProductService){}

  ngOnInit() {
  }

  onSubmitProduct(formData: NgForm){
    console.log("pop-up-comp-data",formData);
    this.productService.createProduct(formData.value).subscribe(responseData=>{
      console.log(responseData);
   });
  }
}
