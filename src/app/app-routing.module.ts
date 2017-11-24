import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceConfigDetailComponent } from './service-config-detail/service-config-detail.component';
import { ServiceConfigComponent } from './service-config/service-config.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' }, 
	{ path: 'home', component: ServiceConfigComponent }, 
	{ path: 'view', component: ServiceConfigDetailComponent }
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
