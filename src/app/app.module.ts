import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceConfigComponent } from './service-config/service-config.component';
import { LoginComponent } from './login/login.component';
import { ServiceConfigDetailComponent } from './service-config-detail/service-config-detail.component';
import { CasePipe } from './case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ServiceConfigComponent,
    LoginComponent,
    ServiceConfigDetailComponent,
    CasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
