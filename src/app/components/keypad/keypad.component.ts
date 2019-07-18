import { Component, OnInit } from '@angular/core';
import { OrderConfirmPopUpComponent } from '../order-confirm-pop-up/order-confirm-pop-up.component';
import { MatDialog } from "@angular/material";


@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  constructor(private dailog:MatDialog) { }

  ngOnInit() {
    // console.log
  }

  openDialog(){
    let dialogRef = this.dailog.open(OrderConfirmPopUpComponent);
 
    dialogRef.afterClosed().subscribe(result =>{
       console.log('submission status:' +result)
    })
   }
}
