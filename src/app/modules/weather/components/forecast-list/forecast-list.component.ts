import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IForecast } from '../../models';

@Component({
    selector: 'wa-forecast-list',
    templateUrl: './forecast-list.component.html',
    styleUrls: ['./forecast-list.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastListComponent implements OnInit {
    @Input() forecastList: IForecast[];

    constructor() { }

    ngOnInit(): void { }

}
