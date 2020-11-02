import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { WeatherModule } from './modules/weather/weather.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule,
        AppRoutingModule,
        WeatherModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
