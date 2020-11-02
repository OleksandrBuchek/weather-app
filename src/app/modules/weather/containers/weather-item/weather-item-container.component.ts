import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

    constructor(
        private weatherFacade: WeatherFacade,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.getForecast();
        this.getCurrentWeatherItem();
    }

    private getForecast(): void {
        this.weatherFacade.getForecastByCityId(CityId.London);
    }

    private getCurrentWeatherItem(): void {
        this.currentWeatherItem$ = this.route.data.pipe(
            map(({ currentWeatherItem }) => currentWeatherItem)
        );
    }
}
