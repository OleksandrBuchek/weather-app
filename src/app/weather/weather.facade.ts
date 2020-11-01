import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { immutable, refCountShareReplay } from '../shared/rxjs-operators';
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
        return this.currentWeatherList$.asObservable().pipe(refCountShareReplay, immutable);
    }

    public selectedLocationForecastList(): Observable<IForecast[]> {
        return this.selectedLocationForecastList$.asObservable().pipe(refCountShareReplay, immutable);
    }

    public getCurrentWeatherByCityIds(citiesIds: CityId[]): void {
        this.weatherApi.getCurrentWeatherForCitiesByIds(citiesIds).subscribe(result => {
            this.currentWeatherList$.next(result.list);
        });
    }

    public getForecastByCityId(cityId: CityId): void {
        this.weatherApi.getForecastForCityById(cityId).subscribe(result => {
            this.selectedLocationForecastList$.next(result.list);
        });
    }
}
