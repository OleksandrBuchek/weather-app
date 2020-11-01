import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { CityId, ICurrentWeather, IGetCurrentWeatherMultipleResult, IGetForecastResult, UnitOfMeasurement } from '../models';

const WEATHER_API = environment.WEATHER_API;

@Injectable({
    providedIn: 'root'
})
export class WeatherApi {

    private readonly DEFAULT_FORECAST_QTY = 5;
    private readonly UNIT_OF_MEASUREMENT = UnitOfMeasurement.Metric;

    constructor(private http: HttpClient) { }

    public getCurrentWeatherForCitiesByIds(citiesIds: CityId[]): Observable<IGetCurrentWeatherMultipleResult> {
        const params = new HttpParams()
            .set('id', citiesIds.join(','))
            .set('units', this.UNIT_OF_MEASUREMENT)
            .set('appId', WEATHER_API.API_KEY);

        return this.http.get<IGetCurrentWeatherMultipleResult>(WEATHER_API.CURRENT_WEATHER_MULTUPLE_BASE_URL, { params });
    }

    public getCurrentWeatherByCityId(cityId: CityId): Observable<ICurrentWeather> {
        const params = new HttpParams()
            .set('id', `${cityId}`)
            .set('units', this.UNIT_OF_MEASUREMENT)
            .set('appId', WEATHER_API.API_KEY);

        return this.http.get<ICurrentWeather>(WEATHER_API.CURRENT_WEATHER_SINGLE_BASE_URL, { params });
    }

    public getForecastForCityById(cityId: CityId, qty: string | number = this.DEFAULT_FORECAST_QTY): Observable<IGetForecastResult> {
        const params = new HttpParams()
            .set('id', `${cityId}`)
            .set('cnt', `${qty}`)
            .set('units', this.UNIT_OF_MEASUREMENT)
            .set('appId', WEATHER_API.API_KEY);

        return this.http.get<IGetForecastResult>(WEATHER_API.FORECAST_ONE_BASE_URL, { params });
    }
}
