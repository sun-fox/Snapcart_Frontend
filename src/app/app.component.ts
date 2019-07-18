import { Component, OnInit,Output,EventEmitter  } from "@angular/core";
import { Product } from "./models/Product";

// import { MatDialog } from "@angular/material";
// import { PopUpFormComponent } from './components/pop-up-form/pop-up-form.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // title = "snapcart";
  // cart_items: Product[] = [];
  // total_amount = 0;

  // addToCart(product: Product){
  //   // this.onAddToCart.emit(product);
  //   console.log("recieved at view-pane component")
  // }
  
  // addToCart(product: Product) {
  //   // check if the product already exists in the this.cart_items. if yes then increase the qty by one
  //   console.log("received at app component");
  //   var exists = 0;
  //   for (let item of this.cart_items) {
  //     if (item.product_id === product.product_id) {
  //       item["quantity"] = item["quantity"] + 1;
  //       exists = 1;
  //     }
  //   }
  //   // if product not exists then add to cart as new product with qty one
  //   if (exists == 0) {
  //     product["quantity"] = 1;
  //     this.cart_items.push(product);
  //   }
  //   // calculate total amount
  //   var total = 0;
  //   for (let item of this.cart_items) {
  //     total = total + item.price * item.quantity;
  //   }
  //   this.total_amount = total;
  // }
  // constructor(public dailog : MatDialog){}

  // openDialog(){
  //  this.dailog.open(PopUpFormComponent);
  // }

}
