import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/Product";
import { ProductService } from "src/app/services/product.service"
import { SelectCustomerPopUpComponent } from '../select-customer-pop-up/select-customer-pop-up.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-order-confirm-pop-up',
  templateUrl: './order-confirm-pop-up.component.html',
  styleUrls: ['./order-confirm-pop-up.component.css']
})
export class OrderConfirmPopUpComponent implements OnInit {
  // @Input() cart_items: Product[];
  // @Input() total_amount: any;
  cart_items: Product[];
  total_amount: any;
  imgBaseUrl: string =
    "https://engrave.in/media/catalog/product/cache/1/small_image/256x/602f0fa2c1f0d1ba5e241f914e856ff9";

  constructor(private dailog:MatDialog, private productService: ProductService) {
    this.cart_items = this.productService.cart_items;
    this.total_amount = this.productService.total_amount;
    console.log(this.cart_items);
  }
  ngOnInit() {
  }

  openDialog(){
    let dialogRef = this.dailog.open(SelectCustomerPopUpComponent);
 
    dialogRef.afterClosed().subscribe(result =>{
       console.log('submission status:' +result)
    })
   }

}
