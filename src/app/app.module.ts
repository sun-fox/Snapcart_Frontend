import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
// import { HttpModule } from "@angular/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { CartComponent } from './components/cart/cart.component';
import { KeypadComponent } from './components/keypad/keypad.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerItemComponent } from './components/customer-item/customer-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PopUpFormComponent } from './components/pop-up-form/pop-up-form.component';
import { ShowUpComponentComponent } from './components/show-up-component/show-up-component.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductItemComponent, CartComponent, KeypadComponent, CartItemComponent, CustomersComponent, CustomerItemComponent, PopUpFormComponent, ShowUpComponentComponent],
  entryComponents: [PopUpFormComponent, ShowUpComponentComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
