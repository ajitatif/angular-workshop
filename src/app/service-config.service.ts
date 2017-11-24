import { Injectable } from '@angular/core';

import { ServiceConfig } from './model/service-config';

@Injectable()
export class ServiceConfigService {

  private serviceConfigList: ServiceConfig[] = [];

  constructor() {
    console.log('Service CTOR');
  	this.serviceConfigList = [
  		ServiceConfig.create('UserService', 'BaseURL', 'http://user.vaillant.io', 'STRING', 1),
  		ServiceConfig.create('UserService', 'Database', '172.147.65.43:3306', 'STRING', 2)
  	];

  }

  getServices(): ServiceConfig[] {
    return this.serviceConfigList;
  }
}
