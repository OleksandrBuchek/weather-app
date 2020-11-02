import { NgModule } from '@angular/core';
import { WeatherListContainerComponent } from './containers/weather-list/weather-list-container.component';
import { WeatherItemContainerComponent } from './containers/weather-item/weather-item-container.component';
import { SharedModule } from '../../shared/shared.module';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { CardModule } from '../ui-elements/card/card.module';
import { WeatherRoutingModule } from './weather-routing.module';


@NgModule({
    declarations: [
        WeatherListContainerComponent,
        WeatherItemContainerComponent,
        WeatherListComponent
    ],
    imports: [
        SharedModule,
        CardModule,
        WeatherRoutingModule
    ],
    exports: [
        WeatherListContainerComponent
    ]
})
export class WeatherModule { }
