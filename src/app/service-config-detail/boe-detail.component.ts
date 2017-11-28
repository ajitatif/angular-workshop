import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ServiceConfigService } from '../service-config.service';

import { ServiceConfig } from '../model/service-config';

@Component({
  selector: 'app-service-boe-detail',
  templateUrl: './service-config-detail.component.html',
  styleUrls: ['./service-config-detail.component.css']
})
export class BoeDetailComponent implements OnInit {

  @Input()
  model: ServiceConfig;

  @ViewChild('theForm')
  public theForm;

  @Output()
  onSave: EventEmitter<ServiceConfig> = new EventEmitter<ServiceConfig>();

  constructor(private activatedRoute: ActivatedRoute, private serviceConfigService: ServiceConfigService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });
  }

  public cancel(): void {
  	this.model = undefined;
  }

  public save(): void {
  	console.log(`Form valid: ${this.theForm.valid}`);
  	this.onSave.emit(this.model);
  	this.model = undefined;
  }

  private loadModel(id: number): void {

    if (id != null && id != undefined) {
      this.serviceConfigService.getById(id).subscribe(model => this.model = model);
    }
  }
}
