import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServiceConfigComponent } from './service-config/service-config.component';
import { LoginComponent } from './login/login.component';
import { ServiceConfigDetailComponent } from './service-config-detail/service-config-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceConfigComponent,
    LoginComponent,
    ServiceConfigDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
