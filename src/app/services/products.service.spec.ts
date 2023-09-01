import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { ProductsComponent } from '../components/products/products.component';
import { HttpClientModule } from '@angular/common/http';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ProductsComponent]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
