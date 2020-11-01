import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'wa-card-header',
    templateUrl: './card-header.component.html',
    styleUrls: ['./card-header.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
