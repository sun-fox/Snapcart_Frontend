import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Customer } from "src/app/models/Customer";
import { CustomerService } from "../../services/customer.service";
import { MatDialog } from "@angular/material";
import { PopUpFormComponent } from '../pop-up-form/pop-up-form.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  @Output() open: EventEmitter<Customer> = new EventEmitter();

  customers: Customer[];

  constructor(private CustomerService: CustomerService,public dailog : MatDialog) {}

  ngOnInit() {
    this.CustomerService.getCustomers().subscribe(customers=> {
      this.customers= customers;
      console.log("customer data",customers);
    });
  }

  onSearch(keyword: string) {
    if (keyword.length > 2) {
      this.CustomerService.searchCustomers(keyword).subscribe(customers=> {
        this.customers= customers;
      });
    } else {
      this.CustomerService.getCustomers().subscribe(customers=> {
        this.customers= customers;
      });
    }
  }

  openDialog(){
   let dialogRef = this.dailog.open(PopUpFormComponent);

   dialogRef.afterClosed().subscribe(result =>{
      console.log('submission status:' +result)
   })
  }

}
