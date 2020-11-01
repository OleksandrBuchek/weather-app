import { Component, OnInit } from '@angular/core';
import { CityId } from '../models';
import { WeatherFacade } from '../weather.facade';

@Component({
    selector: 'app-weather-container',
    templateUrl: './weather.container.html',
    styleUrls: ['./weather.container.sass']
})
export class WeatherContainerComponent implements OnInit {

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
