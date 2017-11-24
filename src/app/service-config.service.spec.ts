import { TestBed, inject } from '@angular/core/testing';

import { ServiceConfigService } from './service-config.service';

describe('ServiceConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceConfigService]
    });
  });

  it('should be created', inject([ServiceConfigService], (service: ServiceConfigService) => {
    expect(service).toBeTruthy();
  }));
});
