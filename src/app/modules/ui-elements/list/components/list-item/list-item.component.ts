import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'wa-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {
    @Input() label: string;

    constructor() { }

    ngOnInit(): void {
    }

}
