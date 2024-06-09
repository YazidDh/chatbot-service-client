import { TestBed } from '@angular/core/testing';

import { CanProceedService } from './can-proceed.service';

describe('CanProceedService', () => {
  let service: CanProceedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanProceedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
