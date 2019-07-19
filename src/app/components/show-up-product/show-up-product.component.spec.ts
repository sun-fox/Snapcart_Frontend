import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUpProductComponent } from './show-up-product.component';

describe('ShowUpProductComponent', () => {
  let component: ShowUpProductComponent;
  let fixture: ComponentFixture<ShowUpProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUpProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUpProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
