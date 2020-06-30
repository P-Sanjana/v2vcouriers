import { TestBed } from '@angular/core/testing';

import { CouriertypeService } from './couriertype.service';

describe('CouriertypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CouriertypeService = TestBed.get(CouriertypeService);
    expect(service).toBeTruthy();
  });
});
