import { TestBed } from '@angular/core/testing';

import { ServiciosProductService } from './servicios-product.service';

describe('ServiciosProductService', () => {
  let service: ServiciosProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
