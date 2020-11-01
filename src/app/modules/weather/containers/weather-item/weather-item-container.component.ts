import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CityId, ICurrentWeather } from '../../models';
import { WeatherFacade } from '../../weather.facade';

@Component({
    selector: 'wa-app-weather-item',
    templateUrl: './weather-item-container.component.html',
    styleUrls: ['./weather-item-container.component.sass']
})
export class WeatherItemContainerComponent implements OnInit {

    public selectedLocationForecastList$ = this.weatherFacade.selectedLocationForecastList();
    public currentWeatherItem$: Observable<ICurrentWeather>;

    constructor(private weatherFacade: WeatherFacade, private snapshot: ActivatedRouteSnapshot) { }

    ngOnInit(): void {
        this.getForecast();
        this.getCurrentWeatherItem();
    }

    private getForecast(): void {
        this.weatherFacade.getForecastByCityId(CityId.London);
    }

    private getCurrentWeatherItem(): void {
        this.currentWeatherItem$ = this.weatherFacade.currentWeatherItem(this.snapshot.paramMap.get('id') as unknown as CityId);
    }
}
