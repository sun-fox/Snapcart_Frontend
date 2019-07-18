import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpProductFormComponent } from './pop-up-product-form.component';

describe('PopUpProductFormComponent', () => {
  let component: PopUpProductFormComponent;
  let fixture: ComponentFixture<PopUpProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
