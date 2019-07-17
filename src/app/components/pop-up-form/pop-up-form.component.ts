import { Component, OnInit, ElementRef } from '@angular/core';
// import {FormsModule,FormBuilder, FormGroup, ngForm} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { CustomerService } from 'src/app/services/customer.service';

/** @title Form field with label */

@Component({
  selector: 'app-pop-up-form',
  templateUrl: './pop-up-form.component.html',
  styleUrls: ['./pop-up-form.component.css']
})
export class PopUpFormComponent implements OnInit {
//  options:FormGroup;
  // constructor(fb: FormBuilder) {
  //   this.options = fb.group({
  //     hideRequired: false,
  //     floatLabel: 'auto',
  //   });
  // }
 constructor(private http:HttpClient, private customerService:CustomerService){}

  ngOnInit() {
  }
    onSubmitCustomer(formData: NgForm){
      console.log(formData.value);
      this.customerService.createCustomer(formData.value).subscribe(responseData=>{
        console.log(responseData);
     });
    }
}
