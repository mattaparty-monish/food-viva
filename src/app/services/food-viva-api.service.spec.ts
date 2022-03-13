import { TestBed } from '@angular/core/testing';

import { FoodVivaApiService } from './food-viva-api.service';

describe('FoodVivaApiService', () => {
  let service: FoodVivaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodVivaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
