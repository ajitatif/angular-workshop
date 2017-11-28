import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ServiceConfigService } from './service-config.service';

import { AppComponent } from './app.component';
import { ServiceConfigComponent } from './service-config/service-config.component';
import { LoginComponent } from './login/login.component';
import { ServiceConfigDetailComponent } from './service-config-detail/service-config-detail.component';
import { CasePipe } from './case.pipe';
import { BoeDetailComponent } from './service-config-detail/boe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceConfigComponent,
    LoginComponent,
    ServiceConfigDetailComponent,
    CasePipe,
    BoeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ ServiceConfigService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
