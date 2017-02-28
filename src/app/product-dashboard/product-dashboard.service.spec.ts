/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductDashboardService } from './product-dashboard.service';

describe('ProductDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDashboardService]
    });
  });

  it('should ...', inject([ProductDashboardService], (service: ProductDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
