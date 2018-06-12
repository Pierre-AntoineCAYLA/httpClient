import { TestBed, inject } from '@angular/core/testing';

import { HeadersInterceptorServicesService } from './headers-interceptor-services.service';

describe('HeadersInterceptorServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadersInterceptorServicesService]
    });
  });

  it('should be created', inject([HeadersInterceptorServicesService], (service: HeadersInterceptorServicesService) => {
    expect(service).toBeTruthy();
  }));
});
