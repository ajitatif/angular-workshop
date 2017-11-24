import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ServiceConfig } from '../model/service-config';

@Component({
  selector: 'app-service-config-detail',
  templateUrl: './service-config-detail.component.html',
  styleUrls: ['./service-config-detail.component.css']
})
export class ServiceConfigDetailComponent implements OnInit {

  @Input()
  model: ServiceConfig;

  @Output()
  onSave: EventEmitter<ServiceConfig> = new EventEmitter<ServiceConfig>();

  constructor() { }

  ngOnInit() {
  }

  public cancel(): void {
  	this.model = undefined;
  }

  public save(): void {
  	this.model.name = document.querySelector('input[name="name"]')['value'];
  	this.model.key = document.querySelector('input[name="key"]')['value'];
  	this.model.type = document.querySelector('input[name="type"]')['value'];
  	this.model.value = document.querySelector('input[name="value"]')['value'];
  	this.onSave.emit(this.model);
  }

}
