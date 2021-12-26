import { InjectionToken } from '@angular/core';
import { Message } from '@comen/common';

export interface MessageInterface {
    registerOnMessage(callback:(message:Message)=>unknown):void;
}

export const MESSAGE_INTERFACE = new InjectionToken<MessageInterface>('player_message_interface');
