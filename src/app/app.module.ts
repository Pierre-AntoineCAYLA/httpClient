import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GithubApiService } from "./services/api/github-api.service";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SamplesErrorInterceptor } from 'src/app/services/sample-error-interceptor-services.service';
import { SamplesHeaderInterceptor } from './services/headers-interceptor-services.service';

@NgModule({
  declarations: [
  AppComponent
  ],
  imports: [
  BrowserModule,
  HttpClientModule
  ],
  providers: [
  GithubApiService,
  { provide: HTTP_INTERCEPTORS, useClass: SamplesHeaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: SamplesErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }