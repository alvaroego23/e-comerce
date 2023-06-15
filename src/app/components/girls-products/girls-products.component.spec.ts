import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsProductsComponent } from './girls-products.component';

describe('GirlsProductsComponent', () => {
  let component: GirlsProductsComponent;
  let fixture: ComponentFixture<GirlsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirlsProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirlsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
