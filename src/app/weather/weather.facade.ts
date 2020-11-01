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
    private forecastList$ = new BehaviorSubject<IForecast[]>([]);
    private currentWeatherItem$ = new BehaviorSubject<ICurrentWeather | null>(null);

    constructor(
        private weatherApi: WeatherApi
    ) {}

    public currentWeatherList(): Observable<ICurrentWeather[]> {
        return this.currentWeatherList$.asObservable().pipe(immutable, refCountShareReplay);
    }

    public selectedLocationForecastList(): Observable<IForecast[]> {
        return this.forecastList$.asObservable().pipe(immutable, refCountShareReplay);
    }

    public currentWeatherItem(cityId: CityId): Observable<ICurrentWeather> {
        if (cityId && this.currentWeatherItem$.getValue()?.id !== cityId) {
            this.weatherApi.getCurrentWeatherByCityId(cityId).subscribe(result => {
                this.currentWeatherItem$.next(result);
            });
        }

        return this.currentWeatherItem$.pipe(immutable, refCountShareReplay);
    }

    public setCurrentWeatherItem(cityId: CityId): void {
        this.currentWeatherItem$.next(this.currentWeatherList$.getValue().find(({ id }) => id === cityId));
    }

    public getCurrentWeatherByCityIds(citiesIds: CityId[]): void {
        this.weatherApi.getCurrentWeatherForCitiesByIds(citiesIds).subscribe(result => {
            this.currentWeatherList$.next(result.list);
        });
    }

    public getForecastByCityId(cityId: CityId): void {
        this.weatherApi.getForecastForCityById(cityId).subscribe(result => {
            this.forecastList$.next(result.list);
        });
    }
}
