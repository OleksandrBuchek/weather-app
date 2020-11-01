import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'wa-card-content',
    templateUrl: './card-content.component.html',
    styleUrls: ['./card-content.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardContentComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
