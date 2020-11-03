import { NgModule } from '@angular/core';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
    declarations: [
        CardHeaderComponent,
        CardContentComponent,
        CardComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        CardHeaderComponent,
        CardContentComponent,
        CardComponent
    ]
})
export class CardModule { }
