import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ERROR_MESSAGE_BASE } from '@shared/constants';
import { immutable, refCountShareReplay } from '@shared/rxjs-operators';
import { WeatherApi } from './api/weather.api';
import { CityId, ICurrentWeather, IForecast } from './models';

@Injectable({
    providedIn: 'root'
})
export class WeatherFacade {

    private currentWeatherList$ = new BehaviorSubject<ICurrentWeather[]>([]);
    private forecastList$ = new BehaviorSubject<IForecast[]>([]);
    private currentWeatherItem$ = new BehaviorSubject<ICurrentWeather | null>(null);
    private dataLoadingError$ = new Subject<string>();

    constructor(
        private weatherApi: WeatherApi
    ) {}

    // SELECTORS

    public currentWeatherList(): Observable<ICurrentWeather[]> {
        return this.currentWeatherList$.asObservable().pipe(immutable, refCountShareReplay);
    }

    public selectedLocationForecastList(): Observable<IForecast[]> {
        return this.forecastList$.asObservable().pipe(immutable, refCountShareReplay);
    }

    public currentWeatherItem(): Observable<ICurrentWeather> {
        return this.currentWeatherItem$.pipe(immutable, refCountShareReplay);
    }

    public dataLoadingError(): Observable<string> {
        return this.dataLoadingError$.asObservable().pipe(refCountShareReplay);
    }

    // COMMANDS

    public setCurrentWeatherItem(cityId: CityId): void {
        this.currentWeatherItem$.next(this.currentWeatherList$.getValue().find(({ id }) => id === cityId));
    }

    public getCurrentWeatherItem(cityId: CityId): void {
        this.weatherApi.getCurrentWeatherByCityId(cityId).pipe(
            catchError(() => this.handleError(`getting weather for ${cityId} city id`))
        ).subscribe(result => {
            this.currentWeatherItem$.next(result);
        });
    }

    public getCurrentWeatherByCityIds(citiesIds: CityId[]): void {
        this.weatherApi.getCurrentWeatherForCitiesByIds(citiesIds).subscribe(result => {
            this.currentWeatherList$.next(result.list);
        });
    }

    public getForecastByCityId(cityId: CityId): void {
        this.weatherApi.getForecastForCityById(cityId).pipe(
            catchError(() => this.handleError(`getting forecast for ${cityId} city id `))
        ).subscribe(result => {
            this.forecastList$.next(result.list);
        });
    }

    private handleError(message: string): Observable<never> {
        this.dataLoadingError$.next(`${ERROR_MESSAGE_BASE} ${message}`);
        return EMPTY;
    }
}
