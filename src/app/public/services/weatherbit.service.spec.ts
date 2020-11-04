import { TestBed } from '@angular/core/testing';

import { WeatherbitService } from './weatherbit.service';

describe('WeatherbitService', () => {
  let service: WeatherbitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherbitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
