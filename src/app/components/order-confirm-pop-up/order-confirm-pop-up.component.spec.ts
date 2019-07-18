import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmPopUpComponent } from './order-confirm-pop-up.component';

describe('OrderConfirmPopUpComponent', () => {
  let component: OrderConfirmPopUpComponent;
  let fixture: ComponentFixture<OrderConfirmPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
