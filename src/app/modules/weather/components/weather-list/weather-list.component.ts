import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityId, ICurrentWeather } from '../../models';

@Component({
    selector: 'wa-weather-list',
    templateUrl: './weather-list.component.html',
    styleUrls: ['./weather-list.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherListComponent implements OnInit {
    @Input() weatherList: ICurrentWeather[] = [];
    @Output() currentWeatherItemSelected = new EventEmitter<CityId>();

    constructor() { }

    ngOnInit(): void { }

    public selectCurrentWeatherItem(cityId: CityId): void {
        this.currentWeatherItemSelected.emit(cityId);
    }

}
