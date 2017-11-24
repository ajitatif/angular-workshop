import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs/Observable';

import { catchError } from 'rxjs/operators';

import { ServiceConfig } from './model/service-config';

@Injectable()
export class ServiceConfigService {

  private adminBaseUrl = 'http://localhost:8080/admin/';

  constructor(private httpClient: HttpClient) {
    console.log('Service CTOR');
  }

  getServices(): Observable<ServiceConfig[]> {
  	return this.httpClient.get<ServiceConfig[]>(this.adminBaseUrl).pipe(
      catchError((err, obs) => { return this.handleError(err, obs) })
  	);
  }

  private handleError(error: any, observable: Observable<any>): ObservableInput<any> {
  	console.log(error);
  	return observable;
  }
}
