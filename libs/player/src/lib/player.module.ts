import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayerApp} from './player.app';

@NgModule({
    declarations: [PlayerApp],
    imports: [CommonModule],
    exports: [
        PlayerApp
    ]
})
export class PlayerModule {}
