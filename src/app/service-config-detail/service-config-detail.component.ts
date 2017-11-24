import { Component, OnInit, Input } from '@angular/core';

import { ServiceConfig } from '../model/service-config';

@Component({
  selector: 'app-service-config-detail',
  templateUrl: './service-config-detail.component.html',
  styleUrls: ['./service-config-detail.component.css']
})
export class ServiceConfigDetailComponent implements OnInit {

  @Input()
  model: ServiceConfig;

  constructor() { }

  ngOnInit() {
  }

}
