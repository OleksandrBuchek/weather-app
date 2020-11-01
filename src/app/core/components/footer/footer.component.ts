import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'wa-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
