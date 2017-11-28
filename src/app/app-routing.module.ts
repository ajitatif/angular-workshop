import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceConfigDetailComponent } from './service-config-detail/service-config-detail.component';
import { ServiceConfigComponent } from './service-config/service-config.component';
import { BoeDetailComponent } from './service-config-detail/boe-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' }, 
	{ path: 'home', component: ServiceConfigComponent }, 
	{ path: 'view', component: ServiceConfigDetailComponent },
	{ path: 'view/:id', component: ServiceConfigDetailComponent },
	{ path: 'view/boe/:id', component: BoeDetailComponent }
] 

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }
