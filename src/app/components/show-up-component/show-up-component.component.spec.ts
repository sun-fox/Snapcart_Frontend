import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUpComponentComponent } from './show-up-component.component';

describe('ShowUpComponentComponent', () => {
  let component: ShowUpComponentComponent;
  let fixture: ComponentFixture<ShowUpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
