import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'wa-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
    @Input() elevationOnHover = false;

    constructor() { }

    ngOnInit(): void {}
}
