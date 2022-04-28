import { TestBed } from '@angular/core/testing';

import { IntegrateService } from './integrate.service';

describe('IntegrateService', () => {
  let service: IntegrateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegrateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
