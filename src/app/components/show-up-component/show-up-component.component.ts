import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from "src/app/models/Customer";

@Component({
  selector: 'app-show-up-component',
  templateUrl: './show-up-component.component.html',
  styleUrls: ['./show-up-component.component.css']
})
export class ShowUpComponentComponent implements OnInit {
  customer: Customer;
  constructor(private customerService: CustomerService) { }
  
  customer_id;

  ngOnInit() {
    this.customer = this.customerService.customer[0];
    this.customer_id=this.customer.customer_id;
    console.log(this.customer);
  }
  onUpdateCustomer(formData: NgForm) {
    console.log("ShowUpComponent",formData.value);
    this.customerService.setCustomer(formData.value,this.customer_id).subscribe(responseData => {
      console.log(responseData);
    });
  }
}
