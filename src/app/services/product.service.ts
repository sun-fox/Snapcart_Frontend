import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../models/Product";
import { Observable } from "rxjs";
import { Customer } from '../models/Customer';
const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/json'
    'Content-Type': 'application/x-www-form-urlencoded'
  })
}
@Injectable({
  providedIn: "root"
})
export class ProductService {
  productsUrl: string = "http://localhost:3000/snapcart/products/manufacturer_id/4";
  baseUrl: string = "http://localhost:3000/snapcart/products/";
  product:Product
  title = "snapcart";
  cart_items: Product[] = [];
  total_amount = 0;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  searchProducts(keyword): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "product_id?keyword=" + keyword);
  }
  createProduct(formData):Observable<Product>{
    console.log(formData);
    return this.http.post<Product>(this.baseUrl+'product_id/new', formData, httpOptions);
  }
  getProduct(product_id):Observable<Product>{
    console.log("services",product_id);
    return this.http.get<Product>(this.baseUrl+"product_id/"+product_id);
  }
  setProduct(product,product_id):Observable<Product>{
    console.log("services",product);
    return this.http.put<Product>(this.baseUrl+"product_id/"+product_id+"/edit",product,httpOptions);
  }

}
