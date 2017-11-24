import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { ServiceConfig } from '../model/service-config';

import { ServiceConfigService } from '../service-config.service';

@Component({
  selector: 'app-service-config',
  templateUrl: './service-config.component.html',
  styleUrls: ['./service-config.component.css'],
  providers: [ ServiceConfigService ]
})
export class ServiceConfigComponent implements OnInit, AfterViewInit {

  public serviceConfigList: ServiceConfig[] = [];
  public selectedConfig: ServiceConfig;

  public currentDate: Date = new Date();

  private dateTimer;

  constructor(private serviceConfigService: ServiceConfigService) { 

  	console.log('Component CTOR');
  }

  ngOnInit() {
  	console.log('Component ngOnInit()');

  	this.serviceConfigList = this.serviceConfigService.getServices();

  	this.dateTimer = setInterval(() => { this.currentDate = new Date() }, 1000);
  }

  ngAfterViewInit() {
  	console.log('Component ngAfterViewInit()');
  }

  ngOnDestroy() {

  	if (!!this.dateTimer) {
  		clearInterval(this.dateTimer);
  	}
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
