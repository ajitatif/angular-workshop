import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs/Observable';

import { catchError, map, tap } from 'rxjs/operators';

import { ServiceConfig } from './model/service-config';

import { environment } from '../environments/environment';

@Injectable()
export class ServiceConfigService {

  private adminBaseUrl: string;

  constructor(private httpClient: HttpClient) {
    console.log('Service CTOR');
    this.adminBaseUrl = environment.serviceConfigAdminUrl;
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
  		return datum;
  	});
  }

  private handleError(error: any, observable: Observable<any>): ObservableInput<any> {
  	console.log(error);
  	return observable;
  }
}
