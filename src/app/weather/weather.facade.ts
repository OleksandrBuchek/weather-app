import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { refCountShareReplay } from '../shared/rxjs-operators';
import { WeatherApi } from './api/weather.api';
import { CityId, ICurrentWeather, IForecast } from './models';

@Injectable({
    providedIn: 'root'
})
export class WeatherFacade {

    private currentWeatherList$ = new BehaviorSubject<ICurrentWeather[]>([]);
    private selectedLocationForecastList$ = new BehaviorSubject<IForecast[]>([]);

    constructor(
        private weatherApi: WeatherApi,
    ) {}

    public currentWeatherList(): Observable<ICurrentWeather[]> {
        return this.currentWeatherList$.asObservable().pipe(refCountShareReplay);
    }

    public selectedLocationForecastList(): Observable<IForecast[]> {
        return this.selectedLocationForecastList$.asObservable().pipe(refCountShareReplay);
    }

    public getCurrentWeatherByCityIds(citiesIds: CityId[]): void {
        this.weatherApi.getCurrentWeatherForCitiesByIds(citiesIds).subscribe(result => {
            console.log(result);
            this.currentWeatherList$.next(result.list);
        });
    }

    public getForecastByCityId(cityId: CityId): void {
        this.weatherApi.getForecastForCityById(cityId).subscribe(result => {
            console.log(result);
            this.selectedLocationForecastList$.next(result.list);
        });
    }
}
