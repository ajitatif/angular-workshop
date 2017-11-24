import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ServiceConfig } from '../model/service-config';

@Component({
  selector: 'app-service-config',
  templateUrl: './service-config.component.html',
  styleUrls: ['./service-config.component.css']
})
export class ServiceConfigComponent implements OnInit, AfterViewInit {

  public serviceConfigList: ServiceConfig[] = [];
  public selectedConfig: ServiceConfig;

  constructor() { 
  	console.log('Component CTOR');
  }

  ngOnInit() {
  	console.log('Component ngOnInit()');
  	this.serviceConfigList = [
  		ServiceConfig.create('UserService', 'BaseURL', 'http://user.vaillant.io', 'STRING', 1),
  		ServiceConfig.create('UserService', 'Database', '172.147.65.43:3306', 'STRING', 2)
  	];
  }

  ngAfterViewInit() {
  	console.log('Component ngAfterViewInit()');
  }

  public editItem(model: ServiceConfig): void {
  	this.selectedConfig = JSON.parse(JSON.stringify(model));
  }
 
  public saveConfig(model: ServiceConfig) {
  	for (let i = 0; i < this.serviceConfigList.length; i++) {
  	  if (this.serviceConfigList[i].id === model.id) {
  	  	this.serviceConfigList[i] = model;
  	  	break;
  	  }
  	}
  }
}
