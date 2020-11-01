import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherListContainerComponent } from './containers/weather-list.container';



@NgModule({
    declarations: [
        WeatherListContainerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        WeatherListContainerComponent
    ]
})
export class WeatherModule { }
