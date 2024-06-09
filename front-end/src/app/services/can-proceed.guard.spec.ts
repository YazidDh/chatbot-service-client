import { TestBed } from '@angular/core/testing';

import { CanProceedGuard } from './can-proceed.guard';

describe('CanProceedGuard', () => {
  let guard: CanProceedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanProceedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
