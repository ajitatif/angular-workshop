import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { ServiceConfig } from '../model/service-config';

@Component({
  selector: 'app-service-config-detail',
  templateUrl: './service-config-detail.component.html',
  styleUrls: ['./service-config-detail.component.css']
})
export class ServiceConfigDetailComponent implements OnInit {

  @Input()
  model: ServiceConfig;

  @ViewChild('theForm')
  public theForm;

  @Output()
  onSave: EventEmitter<ServiceConfig> = new EventEmitter<ServiceConfig>();

  constructor() { }

  ngOnInit() {
  }

  public cancel(): void {
  	this.model = undefined;
  }

  public save(): void {
  	console.log(`Form valid: ${this.theForm.valid}`);
  	this.onSave.emit(this.model);
  	this.model = undefined;
  }

}
