import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        SharedModule
    ],
    exports: [
        FooterComponent,
        HeaderComponent
    ]
  })
  export class CoreModule { }
