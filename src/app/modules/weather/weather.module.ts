import { NgModule } from '@angular/core';
import { WeatherListContainerComponent } from './containers/weather-list/weather-list-container.component';
import { WeatherItemContainerComponent } from './containers/weather-item/weather-item-container.component';
import { SharedModule } from '../../shared/shared.module';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { CardModule } from '../ui-elements/card/card.module';


@NgModule({
    declarations: [
        WeatherListContainerComponent,
        WeatherItemContainerComponent,
        WeatherListComponent
    ],
    imports: [
        SharedModule,
        CardModule,
    ],
    exports: [
        WeatherListContainerComponent
    ]
})
export class WeatherModule { }
