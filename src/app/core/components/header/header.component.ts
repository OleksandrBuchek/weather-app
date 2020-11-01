import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'wa-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }

}
