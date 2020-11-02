import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
    declarations: [
        ListComponent,
        ListItemComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        ListComponent,
        ListItemComponent
    ]
})
export class ListModule { }
