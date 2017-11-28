import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ServiceConfigService } from './service-config.service';

describe('ServiceConfigService', () => {
  let httpMock: HttpTestingController;
  let service: ServiceConfigService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ServiceConfigService ]

    });
    	httpMock = TestBed.get(HttpTestingController);
    	service = TestBed.get(ServiceConfigService);
  });

  it('should return test config', (done) => {

    service.getServices().subscribe(result => {

  		expect(result[0].name).toBe('test config');
  		done();
  	});

  	let request = httpMock.expectOne('http://localhost:8080/admin/');
  	request.flush([{ name: 'test config' }]);
  	httpMock.verify();
  });
});
