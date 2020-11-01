import { Component, OnInit } from '@angular/core';
import { CityId } from '../models';
import { WeatherFacade } from '../weather.facade';

@Component({
    selector: 'app-weather-list-container',
    templateUrl: './weather-list.container.html',
    styleUrls: ['./weather-list.container.sass']
})
export class WeatherListContainerComponent implements OnInit {

    public currentWeatherList$ = this.weatherFacade.currentWeatherList();
    public selectedLocationForecastList$ = this.weatherFacade.selectedLocationForecastList();

    constructor(
        private weatherFacade: WeatherFacade
    ) { }

    ngOnInit(): void {
        this.getCurrentWeatherList();
        this.getForecast();
    }

    private getCurrentWeatherList(): void {
        this.weatherFacade.getCurrentWeatherByCityIds([CityId.Kyiv, CityId.Amsterdam, CityId.London, CityId.Paris, CityId.Rome]);
    }

    private getForecast(): void {
        this.weatherFacade.getForecastByCityId(CityId.London);
    }

}
