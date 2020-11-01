import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'wa-card-footer',
    templateUrl: './card-footer.component.html',
    styleUrls: ['./card-footer.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardFooterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
