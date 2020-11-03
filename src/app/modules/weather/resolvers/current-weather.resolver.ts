import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { iif, merge, Observable, of } from 'rxjs';
import { map, skip, switchMap, take } from 'rxjs/operators';
import { CityId, ICurrentWeather } from '../models';
import { WeatherFacade } from '../weather.facade';

@Injectable({
    providedIn: 'root'
})
export class CurrentWeatherItemResolver implements Resolve<ICurrentWeather> {

    constructor(private weatherFacade: WeatherFacade) { }

    public resolve({ paramMap }: ActivatedRouteSnapshot): Observable<ICurrentWeather | null> {
        return this.weatherFacade.currentWeatherItem().pipe(
            switchMap(item => iif(() => !!item, of(item), this.getCurrentWeatherItemViaApi(paramMap.get('id') as unknown as CityId))),
            take(1)
        );
    }

    private getCurrentWeatherItemViaApi(cityId: CityId): Observable<ICurrentWeather | null> {
        this.weatherFacade.getCurrentWeatherItem(cityId);

        return merge(
            this.weatherFacade.currentWeatherItem().pipe(skip(1)),
            this.weatherFacade.dataLoadingError().pipe(map(() => null))
        );
    }
}
