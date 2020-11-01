import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        SharedModule
    ],
  })
  export class CoreModule { }
