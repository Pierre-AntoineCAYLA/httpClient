import { TestBed, inject } from '@angular/core/testing';

import { SampleErrorInterceptorServicesService } from './sample-error-interceptor-services.service';

describe('SampleErrorInterceptorServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleErrorInterceptorServicesService]
    });
  });

  it('should be created', inject([SampleErrorInterceptorServicesService], (service: SampleErrorInterceptorServicesService) => {
    expect(service).toBeTruthy();
  }));
});
