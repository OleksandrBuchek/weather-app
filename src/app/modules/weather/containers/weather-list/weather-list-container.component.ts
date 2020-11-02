import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityId, WeatherRoutePath } from '../../models';
import { WeatherFacade } from '../../weather.facade';

@Component({
    selector: 'wa-weather-list-container',
    templateUrl: './weather-list-container.component.html',
    styleUrls: ['./weather-list-container.component.sass']
})
export class WeatherListContainerComponent implements OnInit {

    public currentWeatherList$ = this.weatherFacade.currentWeatherList();

    constructor(
        private weatherFacade: WeatherFacade,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getCurrentWeatherList();
    }

    private getCurrentWeatherList(): void {
        this.weatherFacade.getCurrentWeatherByCityIds([CityId.Kyiv, CityId.Amsterdam, CityId.London, CityId.Paris, CityId.Rome]);
    }

    public currentWeatherItemSelected(cityId: CityId): void {
        this.weatherFacade.setCurrentWeatherItem(cityId);
        this.router.navigate([WeatherRoutePath.WeatherList, cityId]);
    }
}
