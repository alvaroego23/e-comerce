import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoysProductsComponent } from './boys-products.component';

describe('BoysProductsComponent', () => {
  let component: BoysProductsComponent;
  let fixture: ComponentFixture<BoysProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoysProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoysProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
