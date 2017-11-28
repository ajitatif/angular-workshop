import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs/Observable';

import { catchError, map, tap } from 'rxjs/operators';

import { ServiceConfig } from './model/service-config';

@Injectable()
export class ServiceConfigService {

  private adminBaseUrl = 'http://localhost:8080/admin/';

  constructor(private httpClient: HttpClient) {
    console.log('Service CTOR');
  }

  getServices(): Observable<ServiceConfig[]> {
  	return this.httpClient.get<ServiceConfig[]>(this.adminBaseUrl).pipe(
  	  tap(data => data.forEach(datum => console.log(datum.name))),
	  map((data) => { return this.mapData(data) }),
  	  tap(data => data.forEach(datum => console.log(datum.name))),
      catchError((err, obs) => { return this.handleError(err, obs) })
  	);
  }

  getById(id: number): Observable<ServiceConfig> {

    return this.httpClient.get<ServiceConfig>(`${this.adminBaseUrl}${id}`)
      .pipe(catchError((err, obs) => { return this.handleError(err, obs)}));

  }

  private mapData(data: ServiceConfig[]): ServiceConfig[] {
  	return data.map(datum => { 
  		datum.name = '--' + datum.name + '--'; 
  		return datum;
  	});
  }

  private handleError(error: any, observable: Observable<any>): ObservableInput<any> {
  	console.log(error);
  	return observable;
  }
}
