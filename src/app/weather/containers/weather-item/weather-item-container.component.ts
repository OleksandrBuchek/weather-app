import { Component, OnInit } from '@angular/core';
import { CityId } from '../../models';
import { WeatherFacade } from '../../weather.facade';

@Component({
    selector: 'app-weather-item',
    templateUrl: './weather-item-container.component.html',
    styleUrls: ['./weather-item-container.component.sass']
})
export class WeatherItemContainerComponent implements OnInit {

    public selectedLocationForecastList$ = this.weatherFacade.selectedLocationForecastList();

    constructor(
        private weatherFacade: WeatherFacade
    ) { }

    ngOnInit(): void {
        this.getForecast();
    }

    private getForecast(): void {
        this.weatherFacade.getForecastByCityId(CityId.London);
    }

}
