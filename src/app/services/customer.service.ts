import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Customer } from "../models/Customer";
import { Observable } from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/json'
    'Content-Type': 'application/x-www-form-urlencoded'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  CustomerUrl: string = "http://localhost:3000/snapcart/customer/";
  baseUrl: string = "http://localhost:3000/snapcart/";
  customer:Customer;
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.CustomerUrl);
  }
  
  searchCustomers(keyword): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.CustomerUrl + "customer_id?keyword=" + keyword);
  }

  createCustomer(formData):Observable<Customer>{
    console.log(formData);
    return this.http.post<Customer>(this.CustomerUrl+'customer_id/new', formData, httpOptions);
  }

  getCustomer(customer_id):Observable<Customer>{
    console.log("services",customer_id);
    return this.http.get<Customer>(this.CustomerUrl+"customer_id/"+customer_id);
  }

  setCustomer(customer,customer_id):Observable<Customer>{
    console.log("services",customer);
    return this.http.put<Customer>(this.CustomerUrl+"customer_id/"+customer_id+"/edit",customer,httpOptions);
  }
}
