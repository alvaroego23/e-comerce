import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysProductsComponent } from './babys-products.component';

describe('BabysProductsComponent', () => {
  let component: BabysProductsComponent;
  let fixture: ComponentFixture<BabysProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabysProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabysProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
