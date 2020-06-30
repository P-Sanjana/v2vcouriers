import { TestBed } from '@angular/core/testing';

import { CourierserviceService } from './courierservice.service';

describe('CourierserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourierserviceService = TestBed.get(CourierserviceService);
    expect(service).toBeTruthy();
  });
});
