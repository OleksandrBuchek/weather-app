import { NgModule } from '@angular/core';
import { CardModule } from '@ui-elements/card/card.module';
import { SharedModule } from '@shared/shared.module';

import { WeatherListContainerComponent } from './containers/weather-list/weather-list-container.component';
import { WeatherItemContainerComponent } from './containers/weather-item/weather-item-container.component';

import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { ForecastListComponent } from './components/forecast-list/forecast-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        WeatherListContainerComponent,
        WeatherItemContainerComponent,
        WeatherListComponent,
        ForecastListComponent
    ],
    imports: [
        SharedModule,
        CardModule,
        RouterModule
    ]
})
export class WeatherModule { }
