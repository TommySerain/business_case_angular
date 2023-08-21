import { TestBed } from '@angular/core/testing';

import { TokenRequestInterceptor } from './token-request.interceptor';

describe('TokenRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenRequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenRequestInterceptor = TestBed.inject(TokenRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
