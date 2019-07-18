import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomerPopUpComponent } from './select-customer-pop-up.component';

describe('SelectCustomerPopUpComponent', () => {
  let component: SelectCustomerPopUpComponent;
  let fixture: ComponentFixture<SelectCustomerPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCustomerPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCustomerPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
