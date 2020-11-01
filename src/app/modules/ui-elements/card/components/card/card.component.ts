import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'wa-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
