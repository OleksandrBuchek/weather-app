import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'wa-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
