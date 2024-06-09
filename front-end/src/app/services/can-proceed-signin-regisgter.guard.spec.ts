import { TestBed } from '@angular/core/testing';

import { CanProceedSigninRegisgterGuard } from './can-proceed-signin-regisgter.guard';

describe('CanProceedSigninRegisgterGuard', () => {
  let guard: CanProceedSigninRegisgterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanProceedSigninRegisgterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
