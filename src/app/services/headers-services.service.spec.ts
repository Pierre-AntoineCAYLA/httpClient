import { TestBed, inject } from '@angular/core/testing';

import { HeadersServicesService } from './headers-services.service';

describe('HeadersServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadersServicesService]
    });
  });

  it('should be created', inject([HeadersServicesService], (service: HeadersServicesService) => {
    expect(service).toBeTruthy();
  }));
});
