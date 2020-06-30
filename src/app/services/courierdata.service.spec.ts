import { TestBed } from '@angular/core/testing';

import { CourierdataService } from './courierdata.service';

describe('CourierdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourierdataService = TestBed.get(CourierdataService);
    expect(service).toBeTruthy();
  });
});
