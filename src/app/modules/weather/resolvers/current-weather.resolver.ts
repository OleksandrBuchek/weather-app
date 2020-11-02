import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CityId, ICurrentWeather } from '../models';
import { WeatherFacade } from '../weather.facade';

@Injectable({
    providedIn: 'root'
})
export class CurrentWeatherItemResolver implements Resolve<ICurrentWeather> {

    constructor(private weatherFacade: WeatherFacade) { }

    public resolve({ paramMap }: ActivatedRouteSnapshot): Observable<ICurrentWeather> {
        return this.weatherFacade.currentWeatherItem(
            paramMap.get('id') as unknown as CityId
        ).pipe(take(1));
    }
}
