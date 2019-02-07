interface IMessage{
    uid:number;
    username:string;
    type:string;
}

class DanmakuMessage implements IMessage{
    constructor(
        public uid:number,
        public username:string,
        public message:string,
        public guard:number,
        public is_admin:boolean,
        public type="danmaku"){}
}

class GiftMessage implements IMessage{
    constructor(
        public uid:number,
        public username:string,
        public gift:string,
        public amount:number,
        public value:number,
        public type="gift"){}
}

export {IMessage,DanmakuMessage,GiftMessage}