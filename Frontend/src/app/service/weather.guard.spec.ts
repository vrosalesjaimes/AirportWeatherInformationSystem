import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { weatherGuard } from './weather.guard';

describe('weatherGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => weatherGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
