import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayProductsComponent } from './play-products.component';

describe('PlayProductsComponent', () => {
  let component: PlayProductsComponent;
  let fixture: ComponentFixture<PlayProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
