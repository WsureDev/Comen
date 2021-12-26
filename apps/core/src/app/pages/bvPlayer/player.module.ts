import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerModule } from '@comen/player';
import { BvPlayerPage } from './player.page';


@NgModule({
    declarations: [BvPlayerPage],
    imports: [
        CommonModule,
        PlayerModule,
        RouterModule.forChild([{
            path: '', //compatiability
            component: BvPlayerPage
        }]),
    ]
})
export class BvPlayerModule {
}
