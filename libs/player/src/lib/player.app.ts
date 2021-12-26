import {
    AfterViewInit,
    ChangeDetectionStrategy, ChangeDetectorRef, Component,
    Inject, NgZone, OnDestroy, Optional, ViewEncapsulation
} from '@angular/core';
import { Message } from '@comen/common';
import { MessageInterface, MESSAGE_INTERFACE } from './message-interface';

const VALID_TYPE = {
    text: true,
    sticker: true,
    paid: true,
    member: true,
    blank: true,
    richtext: true
};

@Component({
    // eslint-disable-next-line
    selector: 'bv-player-render',
    templateUrl: './player.app.html',
    styleUrls: ['./player.app.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
    ]
})
// eslint-disable-next-line
export class PlayerApp implements AfterViewInit, OnDestroy {

    private _destroyed = false;

    bufferQueue: QueuedMessage[] = [];

    constructor(@Optional() @Inject(MESSAGE_INTERFACE) provider: MessageInterface,
                private changeDetector: ChangeDetectorRef,
                public ngzone:NgZone) {
        if (provider) {
            provider.registerOnMessage(m => {
                console.log(JSON.stringify(m))

                if (document.visibilityState == 'hidden') {
                    return;
                }
                if (m.type == 'fold') {

                } else if (m.type in VALID_TYPE) {
                    this.bufferQueue.push(m as any);
                }
            });
        }
    }

    ngAfterViewInit(): void {
        this.ngzone.runOutsideAngular(()=>{
        });
    }
    ngOnDestroy() {
        this._destroyed = true;
    }
}

type QueuedMessage = {
    id: number,
} & Message;
