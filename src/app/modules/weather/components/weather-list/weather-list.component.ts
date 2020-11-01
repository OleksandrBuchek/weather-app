import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICurrentWeather } from '../../models';

@Component({
    selector: 'wa-weather-list',
    templateUrl: './weather-list.component.html',
    styleUrls: ['./weather-list.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherListComponent implements OnInit {
    @Input() weatherList: ICurrentWeather[] = [];

    constructor() { }

    ngOnInit(): void { }

}
